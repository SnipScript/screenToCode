import stripe
from datetime import datetime, timedelta


from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse 
from django.shortcuts import get_object_or_404
from django.db import transaction
from decimal import Decimal

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
import stripe.error

User = get_user_model()

from .models import Subscription, Package, PromotionCode
from .serializers import PackageSerializer, SubscriptionSerializer

stripe.api_key = settings.STRIPE_SECRET_KEY
import logging

logger = logging.getLogger(__name__)


class SubscriptionView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        subscriptions = Subscription.objects.filter(user=request.user, status=True).last()
        serializer = SubscriptionSerializer(subscriptions)
        response = {
            "status": status.HTTP_200_OK,
            "success": True,
            "data": serializer.data,
        }
        return Response(response, status=status.HTTP_200_OK)

class PackageView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        packages = Package.objects.all()
        serializer = PackageSerializer(packages, many=True)
        response = {
            "status": status.HTTP_200_OK,
            "success": True,
            "data": serializer.data,
        }
        return Response(response, status=status.HTTP_200_OK)




class SubscriptionCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request,package_id, *args, **kwargs):
        user = request.user
        package = get_object_or_404(Package, id=package_id)

        active_subscription = Subscription.objects.filter(user=user, status=True).first()

        try:
            customers = stripe.Customer.list(email=user.email)
            stripe_customer = customers.data[0] if customers.data else stripe.Customer.create(
                email=user.email,
                name=f"{user.first_name} {user.last_name}"
            )

        except stripe.error.StripeError as e:
            return Response({"success": False, "message": f"Stripe Error: {str(e)}"}, status=400)

        try:
            checkout_session = stripe.checkout.Session.create(
                customer=stripe_customer.id,
                payment_method_types=["card"],
                line_items=[{"price": package.stripe_price_id, "quantity": 1}],
                mode="subscription",
                success_url=settings.STRIPE_SUCCESS_URL,
                cancel_url=settings.STRIPE_CANCEL_URL,
                metadata={
                    "user_id": user.id,
                    "package_id": package.id,
                    "old_subscription_id": active_subscription.id if active_subscription else "",
                    "stripe_subscription_id": active_subscription.stripe_subscription_id if active_subscription else "",
                },
                allow_promotion_codes=True,  

            )

            return Response({"success": True, "checkout_url": checkout_session.url})
        except stripe.error.StripeError as e:
            return Response({"success": False, "message": f"Stripe Error: {str(e)}"}, status=400)
        
@csrf_exempt
def stripe_webhook(request):
    payload = request.body
    sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')
    endpoint_secret = settings.STRIPE_WEBHOOK_SECRET
    event = None

    print('sig header', sig_header)
    print('payload', payload)


    try:
        event = stripe.Webhook.construct_event(payload, sig_header, endpoint_secret)
    except ValueError:
        return JsonResponse({"error": "Invalid payload"}, status=400)
    except stripe.error.SignatureVerificationError:
        return JsonResponse({"error": "Invalid signature"}, status=400)

    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]
        user_id = session["metadata"]["user_id"]
        package_id = session["metadata"]["package_id"]
        old_subscription_id = session["metadata"]["old_subscription_id"]
        old_stripe_subscription_id = session["metadata"]["stripe_subscription_id"]

        user = User.objects.get(id=user_id)
        package = Package.objects.get(id=package_id)

        # Get Stripe subscription details
        stripe_subscription = stripe.Subscription.retrieve(session["subscription"])
        end_period = stripe_subscription["current_period_end"]  # Unix timestamp

        if old_stripe_subscription_id:
            try:
                stripe.Subscription.modify(old_stripe_subscription_id, cancel_at_period_end=True)
            except stripe.error.StripeError as e:
                return JsonResponse({"error": f"Failed to cancel old subscription: {str(e)}"}, status=400)

        if old_subscription_id:
            old_subscription = Subscription.objects.filter(id=old_subscription_id, status=True).first()
            if old_subscription:
                old_subscription.status = False
                old_subscription.save()


        Subscription.objects.create(
            user=user,
            package=package,
            stripe_subscription_id=session["subscription"],
            status=True,
            start_date=datetime.now(),
            end_date=datetime.now() + timedelta(seconds=end_period - stripe_subscription["current_period_start"]),  # Exact end date
            conversation_left=package.conversation_limit,
        )
    return JsonResponse({"message": "Webhook received"}, status=200)
    


class CancelSubscriptionView(APIView):
    def post(self, request, subscription_id=None):
        user = request.user
        subscription = Subscription.objects.get(pk=subscription_id, user=user)
        
        try:
            # cancel the subscription
            stripe.Subscription.cancel(subscription.stripe_subscription_id)
            
            # mark the subscription as inactive
            subscription.status = False
            subscription.save()
            
            response = {
                "status": status.HTTP_200_OK,
                "success": True,
                "message": "Subscription cancelled successfully"
            }
            return Response(response)
            
        except stripe.error.InvalidRequestError as e:
            # Handle any invalid request errors
            return Response({
                "status": status.HTTP_400_BAD_REQUEST,
                "success": False,
                "message": "Failed to cancel subscription",
            }, status=status.HTTP_400_BAD_REQUEST)
            
        except stripe.error.RateLimitError as e:
            # Handle rate limit errors
            return Response({
                "status": status.HTTP_429_TOO_MANY_REQUESTS,
                "success": False,
                "message": "Too many requests, please try again later",
            }, status=status.HTTP_429_TOO_MANY_REQUESTS)
        