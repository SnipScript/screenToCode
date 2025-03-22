from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL
# Create your models here.
class Feature(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = "Features"
        ordering = ['name']

PACKAGE_TYPE = (
    ('month','MONTH'),
    ('year','YEAR'),
    ('week','WEEK'),
    ('day','Day')
)
class Package(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    features = models.ManyToManyField(Feature)
    package_type = models.CharField(choices=PACKAGE_TYPE, default='month', max_length=255)
    conversation_limit = models.IntegerField(default=0)
    discount = models.IntegerField(default=0)

    stripe_product_id = models.CharField(max_length=255,blank=True)
    stripe_price_id = models.CharField(max_length=255,blank=True)
    status = models.BooleanField(default=True)

    @property
    def total_price(self):
        if self.discount > 0:
            return self.price - (self.price * self.discount / 100)
        return self.price
    def __str__(self):
        return self.name
    class Meta:
        ordering = ['name']
        verbose_name_plural = "Packages"
    # def save(self, *args, **kwargs):
    #     if self.discount > 0:
    #         self.price = self.price - (self.price * self.discount / 100)
    #     super().save(*args, **kwargs)
        



class Subscription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    package = models.ForeignKey(Package, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(null=True, blank=True)
    conversation_left = models.IntegerField(null=True, blank=True)
    stripe_subscription_id = models.CharField(max_length=100, blank=True)
    status = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name} - {self.package.name}'

    class Meta:
        verbose_name = 'Subscription'
        verbose_name_plural = 'Subscriptions'

    def save(self, *args, **kwargs):
        if self.status:
            self.conversation_left = self.package.conversation_limit
        super().save(*args, **kwargs)

class PromotionCode(models.Model):
    name = models.CharField(max_length=100, unique=True)  # A readable name for admin
    code = models.CharField(max_length=50, unique=True)  # The actual promotion code
    discount_percent = models.PositiveIntegerField(help_text="Enter discount percentage (0-100)")
    duration = models.CharField(max_length=20,default="once")
    # duration_in_months = models.PositiveIntegerField(null=True, blank=True, help_text="Only for repeating discounts")
    stripe_coupon_id = models.CharField(max_length=100, blank=True, null=True, help_text="ID of the coupon in Stripe")
    stripe_promotion_code_id = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name 