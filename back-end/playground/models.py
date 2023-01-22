from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30)
    closets = models.ForeignKey('Closet', on_delete=models.CASCADE)


class Closet(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    clothes = models.ForeignKey('Clothing', on_delete=models.CASCADE)


class Clothing(models.Model):
    name = models.CharField(max_length=30)
    color = models.CharField(max_length=30)
    clothing_type = models.CharField(max_length=30)
    img = models.ImageField()
