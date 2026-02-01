from django.db import models

# Create your models here.
class Student(models.Model):
    roll_no = models.IntegerField()
    name = models.CharField(max_length=255, null=False)
    email = models.EmailField(max_length=255, null=False)
    password = models.CharField(max_length=255, null=False)
    description = models.TextField()

    def __str__(self):
        return f'Student(name={self.name}, email={self.email})'
