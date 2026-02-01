from django.shortcuts import render, redirect
from core.models import *
from django.views import View
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def core_view(request):
    user = User.objects.get(username='admin')
    # user.set_password('hellobro2')
    # user.save()
    # logout(request)
    # del request.session['name']
    # print(request.session['name'])
    context = {
        'name': 'Himanshu'
    }
    return render(request, 'core/core.html', context)

class Core2View(View):
    def get(self, request):
        # students = [
        #     Student(roll_no=1, name='Himanshu', email='himanshu@gmail.com',
        #         password='1', description='desc1'),
        #     Student(roll_no=2, name='Aman', email='aman@gmail.com',
        #         password='2', description='desc2'),
        #     Student(roll_no=3, name='Saket', email='saket@gmail.com',
        #         password='3', description='desc3'),
        # ]
        # Student.objects.bulk_create(students)
        user = authenticate(username='admin', password='1')
        login(request, user)
        student_datas = Student.objects.filter(roll_no__gte=1)
        for student in student_datas:
            print(student)
        request.session['name'] = 'Himanshu'
        # return redirect('core_view')
        return render(request, 'core/core2.html')

def student_detail(request, pk):
    try:
        # User.objects.create_user(username='user2', password='hellobro')
        # users = User.objects.all()
        # for user in users:
        #     print(user.username, user.password)
        student = Student.objects.get(roll_no=pk)
        context = {
            'student': student
        }
        return render(request, 'core/student_detail.html', context)
    except:
        return redirect('core_view')
