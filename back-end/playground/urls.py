from django.urls import path
from . import views

# URL configuration
urlpatterns = [
    path('login/', views.login),
    path('profile/', views.masterlist),
    path('create/', views.create_clothing),
    path('signup/', views.signup)
]
