from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
class User(AbstractUser):
    user_name = models.CharField(max_length=255)
    email = models.CharField(unique=True,max_length=255)
    password = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255)
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS=[]