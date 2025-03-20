from django.contrib import admin
from unfold.admin import ModelAdmin

from .models import Feature, Package, Subscription, PromotionCode


@admin.register(Feature)
class FeatureAdmin(ModelAdmin):
    list_display = ['name']

@admin.register(Package)
class PackageAdmin(ModelAdmin):
    list_display = ['name','price', 'discount', 'total_price', 'package_type']

@admin.register(Subscription)
class SubscriptionAdmin(ModelAdmin):
    list_display = ['user', 'package', 'start_date', 'status', 'end_date']

@admin.register(PromotionCode)
class PromotionCodeAdmin(ModelAdmin):
    list_display = ['name','code', 'discount_percent']
    