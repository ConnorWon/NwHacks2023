from django.db import models


class User(models.Model):
    username = models.CharField(max_length=30)


class Closet(models.Model):
    name = models.CharField(max_length=30)
    user = models.ForeignKey('User', on_delete=models.SET_NULL, null=True)


class Clothing(models.Model):
    name = models.CharField(max_length=30)
    color = models.CharField(max_length=30)
    clothing_type = models.CharField(max_length=30)
    closet = models.ForeignKey('Closet', on_delete=models.CASCADE)
