# from django.db import models
# from apps.users.models import User
# import cloudinary
# import cloudinary.models


# class DesignRequest(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="design_requests")
#     prompt = models.TextField()
#     image = cloudinary.models.CloudinaryField('image', blank=True, null=True)
#     ai_response = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"Request by {self.user.email} on {self.created_at}"





from django.db import models
from apps.users.models import User
import cloudinary
import cloudinary.models

class DesignRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="design_requests")
    prompt = models.TextField()
    url = models.URLField(blank=True, null=True)  # New field for URL
    image = cloudinary.models.CloudinaryField('image', blank=True, null=True)
    ai_response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Request by {self.user.email} on {self.created_at}"

class UserDesignHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="design_history")
    design_request = models.ForeignKey(DesignRequest, on_delete=models.CASCADE, related_name="history_entries")
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default="completed")  # completed, failed, in_progress

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"History entry for {self.user.email} on {self.created_at}"