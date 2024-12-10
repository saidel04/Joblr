from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.contrib.auth.models import BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        """
        Create and return a regular user with the given username and email.
        """
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)  # Hash the password
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        """
        Create and return a superuser with the given username and email.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, email, password, **extra_fields)

    def get_by_natural_key(self, username):
        """
        Retrieve a user by their natural key (username).
        """
        return self.get(username=username)


class User(AbstractBaseUser):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)  # Indicates if the user is active
    last_login = models.DateTimeField(null=True, blank=True)

    # User first time setup screen
    firstLogin = models.BooleanField(default=True)

    # User-specific additional data
    education = models.CharField(max_length=255, default="", blank=True)
    currentlyEmployed = models.BooleanField(default=False)
    current_organization = models.CharField(max_length=255, default="", blank=True)
    current_roll = models.CharField(max_length=255, default="", blank=True)
    city = models.CharField(max_length=255, default="", blank=True)
    country = models.CharField(max_length=255, default="", blank=True)
    githubLink = models.URLField(max_length=255, default="", blank=True)
    linkedinLink = models.URLField(max_length=255, default="", blank=True)

    objects = CustomUserManager()  # Use the custom manager

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username
