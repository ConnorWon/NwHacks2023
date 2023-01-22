from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.shortcuts import render, get_object_or_404, redirect
from playground.models import User
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from playground.modelSerializers.serializers import UserSerializer
from playground.models import User, Closet, Clothing

# File Description
# is a request handler


# class Home(View):
#     def get(self, request):
#         return render(request, 'hello.html')


# class Profile(View):
#     def get(self, request, pk):
#         user = User.objects.get(id=pk)
#         return JsonResponse({'user': user})

@api_view(['GET'])
def masterlist(request):
    data = request.data
    closet = Closet.objects.get(user=data.user)
    clothes = Clothing.objects.filter(closet=closet)
    results = []
    for clothing in clothes:
        results.append(clothing.name)
    return Response(results)


@api_view(['POST'])
def login(request):
    data = request.data["username"]
    print(data)
    try:
        User.objects.get(username__icontains=data)
        return Response(True)
    except:
        return Response(False)
    # def get(self, request):
    #     data = request.GET
    #     print(data)
    #     try:
    #         User.objects.get(username__icontains=data)
    #         return JsonResponse({'result': True})
    #     except:
    #         return JsonResponse({'result': False})
