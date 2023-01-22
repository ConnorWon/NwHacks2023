from django.views import View
from django.views import generic
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from playground.models import User
from django.http import JsonResponse

from django.contrib.auth.mixins import LoginRequiredMixin

# File Description
# is a request handler


class Home(View):
    def get(self, request):
        return render(request, 'hello.html')


class Profile(View):
    def get(self, request, pk):
        user = User.objects.get(id=pk)
        return JsonResponse({'user': user})


class Login(View):
    def get(self, request):
        data = request.GET
        try:
            User.objects.get(user__icontains=data)
            return JsonResponse({'result': True})
        except:
            return JsonResponse({'result': False})
