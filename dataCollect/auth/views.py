from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User

from .serializers import UserSerializer

class ListUsers(APIView):
    def post(self, request):
        serialiser= UserSerializer(data=request.data)
        serialiser.is_valid(raise_exception=True)
        serialiser.save()
        return Response(serialiser.data)
        