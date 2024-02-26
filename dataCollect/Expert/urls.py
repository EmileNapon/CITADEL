from django.urls import path
from .views import enregistrer_donnees, get_all_texttextExpert


urlpatterns = [
    # ... vos autres vues ...
    path('postExpert', enregistrer_donnees, name='postExpert'),   
    path('getExpert', get_all_texttextExpert, name='getExpert'),
]
