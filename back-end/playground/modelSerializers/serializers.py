from rest_framework import serializers
from playground.models import User, Closet, Clothing


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username')

class ClothingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clothing
        fields = ('name', 'color', 'clothing_type', 'closet')

class ClosetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Closet
        fields = ('pk', 'name', 'user')
