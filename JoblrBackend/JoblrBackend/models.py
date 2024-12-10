from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class User(AbstractBaseUser):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)  # Add this field
    last_login = models.DateTimeField(null=True, blank=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username
    

class UserData(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # MANDATORY FOR THE USER
    education = models.CharField(max_length=255, unique=False, default="") # Should be whatever the user is studying i.e. B. Computer Science
    currentlyEmployed = models.BooleanField(default=False) # Currently employed
    current_organization = models.CharField(max_length=255, unique=False, default="") # This would be the organization the user is working at i.e. PSPC
    current_roll = models.CharField(max_length=255, unique=False, default="") # This would be his current position/title
    city = models.CharField(max_length=255, default= "") # User City
    country = models.CharField(max_length=255, default= "") # User Country
    
    # OTHER USER DATA
    githubLink = models.CharField(max_length=255, default= "") # user github link
    linkedinLink = models.CharField(max_length=255, default= "") # users linkedin link
    

