from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from .models import Expert
from .serializers import ExpertSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def enregistrer_donnees(request):
    for data in request.data:
        serializer = ExpertSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status=400)
    
    return Response({'message': 'Données enregistrées avec succès'})

# GET OF TEXT.TEXT
def get_all_texttextExpert(request):       
    if request.method=='GET':
        texttexts = Expert.objects.all()
        data = [{'french': text.french, 'moore': text.moore, 'date_saisie': text.date_saisie} for text in texttexts]
        return JsonResponse(data, safe=False)
