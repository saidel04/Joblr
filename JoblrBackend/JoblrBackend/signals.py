from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model  # Import get_user_model
from .models import UserData

User = get_user_model()  # Get your custom User model

@receiver(post_save, sender=User)
def create_user_data(sender, instance, created, **kwargs):
    """
    Signal to create a UserData instance automatically 
    whenever a User instance is created.
    """
    if created:
        print("UserData creation signal triggered")
        UserData.objects.create(user=instance)
