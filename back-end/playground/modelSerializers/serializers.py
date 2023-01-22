from rest_framework import serializers
from playground.models import User, Closet, Clothing


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username')
