from django.shortcuts import render

from rest_framework import viewsets
from .serializers import PieceSerializer
from .models import piece

class PieceView(viewsets.ModelViewSet):
    
    serializer_class = PieceSerializer

    queryset = piece.objects.all()
