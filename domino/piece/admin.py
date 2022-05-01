from django.contrib import admin

from .models import piece

class Piece(admin.ModelAdmin):
    list_display = ("pieceName","rightNumber","leftNumber")
admin.site.register(piece,Piece)