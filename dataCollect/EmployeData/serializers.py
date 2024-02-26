from rest_framework import serializers
from .models import TextText

class TextTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextText
        fields = ['french', 'moore', 'date_saisie', 'nouvellesDonnees']