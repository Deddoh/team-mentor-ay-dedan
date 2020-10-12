from django.urls import path
from . import views

urlpatterns=[
    path('register/', views.register, name='register'),
    path('applicant_register/', views.applicant_register.as_view()),
]