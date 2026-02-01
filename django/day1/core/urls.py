from django.urls import path
from core.views import *

urlpatterns = [
    path('', core_view, name='core_view'),
    path('2/', Core2View.as_view(), name='core2_view'),
    path('student/<int:pk>/', student_detail, name='student_detail'),
]