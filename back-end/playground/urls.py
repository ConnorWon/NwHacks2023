from django.urls import path
from . import views

# URL configuration
urlpatterns = [
    # path('', views.Home.as_view()),
    # path('profile/<int:pk>', views.Profile.as_view()),
    path('login/', views.login),
    path('profile/', views.masterlist),
    path('create/', views.create_clothing)
]
