from django.db import models

class piece(models.Model):
    pieceName = models.CharField(max_length=7)
    rightNumber = models.IntegerField()
    leftNumber = models.IntegerField()
    def __str__(self):
 
        #it will return the title
        return self.pieceName
