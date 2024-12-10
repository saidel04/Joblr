from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class User(AbstractBaseUser):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)  # Indicates if the user is active
    last_login = models.DateTimeField(null=True, blank=True)

    # User-specific additional data
    education = models.CharField(max_length=255, default="", blank=True)  # What the user is studying
    currentlyEmployed = models.BooleanField(default=False)  # Employment status
    current_organization = models.CharField(max_length=255, default="", blank=True)  # Current workplace
    current_roll = models.CharField(max_length=255, default="", blank=True)  # Current position/title
    city = models.CharField(max_length=255, default="", blank=True)  # City of residence
    country = models.CharField(max_length=255, default="", blank=True)  # Country of residence
    githubLink = models.URLField(max_length=255, default="", blank=True)  # GitHub profile link
    linkedinLink = models.URLField(max_length=255, default="", blank=True)  # LinkedIn profile link

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username
