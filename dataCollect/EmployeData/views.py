from django.http import JsonResponse
from rest_framework import generics
from .models import TextText
from .serializers import TextTextSerializer

class CreateTextTextView(generics.CreateAPIView):
    queryset = TextText.objects.all()
    serializer_class = TextTextSerializer
    def perform_create(self, serializer):
        serializer.save(nouvellesDonnees=True)


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


data_json = response.json()
data_expert2 = pd.DataFrame(data_json)

while True:
    data_expert2 = pd.read_csv('nouvelles_donnees.csv')
    data_expert2['texte_fr'] = data_expert2['texte_fr'].apply(lambda x: clean_text(x))
    data_expert2['texte_moore'] = data_expert2['texte_moore'].apply(lambda x: clean_text(x))
    sequences_fr_new = tokenizer_fr.texts_to_sequences(data_expert2['texte_fr'])
    padded_sequences_fr_new = pad_sequences(sequences_fr_new, maxlen=padded_sequences_fr.shape[1])
    X_train_new = np.vstack([X_train, padded_sequences_fr_new])
    y_train_new = np.concatenate([y_train, new_data['langue']])
    model.fit(X_train_new, y_train_new, epochs=5, validation_split=0.2)