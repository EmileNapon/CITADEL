
from django.http import JsonResponse
from rest_framework import generics
from .models import TextText
from .serializers import TextTextSerializer

class CreateTextTextView(generics.CreateAPIView):
    queryset = TextText.objects.all()
    serializer_class = TextTextSerializer
    
    def perform_create(self, serializer):
        serializer.save(nouvellesDonnees=True)
        # Récupérer l'URL de l'audio depuis la requête POST
        audio_url = self.request.data.get('audioUrl')
        
        # Enregistrer l'URL dans le champ audioURL
        serializer.save(audioURL=audio_url)


# GET OF TEXT.TEXT
def get_all_texttextEmploye(request):       
    if request.method=='GET':
        texttexts = TextText.objects.all()
        data = [{'french': text.french, 'moore': text.moore, 'date_saisie': text.date_saisie} for text in texttexts]
        return JsonResponse(data, safe=False)

def get_all_texttextExpert(request):       
    if request.method == 'GET':
        texttexts = TextText.objects.filter(nouvellesDonnees=True)  
        data = [{'french': text.french, 'moore': text.moore, 'date_saisie': text.date_saisie} for text in texttexts]
        for text in texttexts:
            text.nouvellesDonnees = False
            text.save()  # Réinitialiser le champ nouvellesDonnees après récupération
        
        return JsonResponse(data, safe=False)
