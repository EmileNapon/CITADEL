from django.urls import path

from .views import ListUsers
urlpatterns = [
    path('auth', ListUsers.as_view(), name='s'),
   
   
]
