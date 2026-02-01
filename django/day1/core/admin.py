from django.contrib import admin
from core.models import *

# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'roll_no', 'name', 'email', 'description']