from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.shortcuts import render, get_object_or_404, redirect
from playground.models import User
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from playground.modelSerializers.serializers import UserSerializer, ClothingSerializer, ClosetSerializer
from playground.models import User, Closet, Clothing
import json

# File Description
# is a request handler


# class Home(View):
#     def get(self, request):
#         return render(request, 'hello.html')


# class Profile(View):
#     def get(self, request, pk):
#         user = User.objects.get(id=pk)
#         return JsonResponse({'user': user})
@api_view(['POST'])
def create_clothing(request):
    data = request.data["clothing"]
    closet = Closet.objects.get(pk=data["closet"])
    clothing = Clothing(name = data["name"], color = data["color"], clothing_type = data["clothing_type"], closet = closet)
    clothing.save()
    return Response(True)


@api_view(['POST'])
def masterlist(request):
    data = request.data["username"]
    user = User.objects.get(username__icontains=data)
    closet = Closet.objects.get(user=user)
    clothes = Clothing.objects.filter(closet=closet)
    results = []
    for clothing in clothes:
        serializer = ClothingSerializer(clothing, context={'request': request}, many=False)
        results.append(serializer.data)
    # sent = []
    # closetSerializer = ClosetSerializer(closet, context={'request': request}, many=False)
    # closetData = [closetSerializer.data]
    # sent.append(closetData)
    # sent.append(results)
    return Response(results)


@api_view(['POST'])
def login(request):
    # try:
        data = request.data["username"]
        print(data)
        obj = User.objects.get(username__icontains=data)
        if (obj):
            return Response(True)
        else:
            return Response(False)
    # except:
    #         return Response(False)