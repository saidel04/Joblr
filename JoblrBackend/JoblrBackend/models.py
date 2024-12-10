from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models
from .managers import UserManager  



class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # Required for admin access
    is_superuser = models.BooleanField(default=False)  # Required for admin access
    last_login = models.DateTimeField(null=True, blank=True)

    # User-specific additional data
    firstLogin = models.BooleanField(default=True)
    education = models.CharField(max_length=255, default="", blank=True)
    currentlyEmployed = models.BooleanField(default=False)
    current_organization = models.CharField(max_length=255, default="", blank=True)
    current_roll = models.CharField(max_length=255, default="", blank=True)
    city = models.CharField(max_length=255, default="", blank=True)
    country = models.CharField(max_length=255, default="", blank=True)
    githubLink = models.URLField(max_length=255, default="", blank=True)
    linkedinLink = models.URLField(max_length=255, default="", blank=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    def __str__(self):
        return self.username
    
    def has_perm(self, perm, obj=None):
        return True  
    
    def has_module_perms(self, app_label):
        return True  

    

