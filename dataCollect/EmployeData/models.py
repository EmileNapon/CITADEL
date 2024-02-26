from django.db import models

# Create your models here.

class TextText(models.Model):
    french = models.TextField(unique=True)
    moore = models.TextField()
    date_saisie= models.DateTimeField(auto_now_add=True)
    nouvellesDonnees = models.BooleanField(default=True) 
    
  