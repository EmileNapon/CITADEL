from django.urls import path
from .views import CreateTextTextView,get_all_texttextEmploye, get_all_texttextExpert


urlpatterns = [
    # ... vos autres vues ...
    path('postEmploye', CreateTextTextView.as_view(), name='postEmploye'),
    path('getEmploye', get_all_texttextEmploye, name='getEmploye'),
    path('getExpert', get_all_texttextExpert, name='getExpert'),
]