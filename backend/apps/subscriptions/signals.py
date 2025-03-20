from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver
from django.conf import settings 


from .models import Package, PromotionCode

import stripe 
stripe.api_key = settings.STRIPE_SECRET_KEY


@receiver(post_save, sender=Package)
def create_stripe_product(sender, instance, created, **kwargs):
    if not instance.stripe_product_id and  instance.total_price > 0:
        
        stripe_product = stripe.Product.create(
            name=instance.name,
            description=instance.description if instance.description else '',
        )
        instance.stripe_product_id = stripe_product.id
        instance.save()
    if not instance.stripe_price_id:
        if instance.price > 0:
            stripe_price = stripe.Price.create(
                product = instance.stripe_product_id,
                unit_amount = int(instance.total_price * 100),
                currency = 'usd',
                recurring = {'interval':instance.package_type}
            )
        # else:
            # stripe_price = stripe.Price.create(
            #     product = instance.stripe_product_id,
            #     unit_amount = 0,
            #     currency = 'usd',
            #     recurring = {'interval':instance.package_type}
                
            # )
            instance.stripe_price_id = stripe_price.id
            instance.save()


@receiver(post_save, sender=Package)
def update_stripe_product(sender, instance, **kwargs):
    if instance.stripe_product_id and instance.stripe_price_id:
        stripe_product = stripe.Product.retrieve(instance.stripe_product_id)
        stripe_price = stripe.Price.retrieve(instance.stripe_price_id)

        if stripe_product.name != instance.name:
            stripe.Product.modify(
                instance.stripe_product_id,
                name=instance.name
            )

        if stripe_price.unit_amount != int(instance.total_price * 100):
            stripe.Price.modify(
                instance.stripe_price_id,
                active=False
            )
            if instance.price > 0:
                stripe_price = stripe.Price.create(
                    product = instance.stripe_product_id,
                    unit_amount = int(instance.total_price * 100),
                    currency = 'usd',
                    recurring = {'interval':instance.package_type}
                )
            # else:
            #     stripe_price = stripe.price.create(
            #         product = instance.stripe_product_id,
            #         unit_amount = 0,
            #         currency = 'usd',
            #         recurring = {'interval':instance.package_type},
            #         trial_period_days = 30
            #     )
                instance.stripe_price_id = stripe_price.id
                instance.save()


@receiver(pre_delete, sender=Package)
def delete_stripe_product(sender, instance, **kwargs):
    if instance.stripe_product_id:
        stripe.Product.modify(
            instance.stripe_product_id,
            active=False
            )
    if instance.stripe_price_id:
        stripe.Price.modify(
            instance.stripe_price_id,
            active=False
            )
        


@receiver(post_save, sender=PromotionCode)
def create_stripe_promotion_code(sender, instance, created, **kwargs):
    if created and not instance.stripe_coupon_id:
        try:
            # First, create the coupon if not exists
            stripe_coupon = stripe.Coupon.create(
                name=instance.name,
                percent_off=instance.discount_percent,
                duration=instance.duration,
                # code=instance.code
            )
            # Then create a promotion code linked to this coupon
            stripe_promotion_code = stripe.PromotionCode.create(
                coupon=stripe_coupon.id,
                code=instance.code  # Ensure this matches what users enter
            )
            instance.stripe_coupon_id = stripe_coupon.id
            instance.stripe_promotion_code_id = stripe_promotion_code.id  # Optionally store for reference
            instance.save(update_fields=['stripe_coupon_id','stripe_promotion_code_id'])
        except Exception as e:
            print(f"Stripe error: {e}")