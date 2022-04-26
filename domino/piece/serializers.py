from rest_framework import serializers
from .models import piece

class PieceSerializer(serializers.ModelSerializer):

    class Meta:
        model = piece
        fields = ('id','pieceName', 'rightNumber', 'leftNumber')