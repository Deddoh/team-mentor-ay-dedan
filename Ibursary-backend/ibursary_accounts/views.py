from django.shortcuts import render
from django.views.generic import CreateView
from .models import User, BursaryApplicant, BursaryCommitteeAdmin
from .form import ApplicantSignUpForm, BursaryAdminSignUpForm

# Create your views here.
def register(request):
    return render(request, '../templates/register.html')

# a view that displays a form for creating the object then saves the object
class applicant_register(CreateView):
    model = User
    # form name from form.py
    form_class = ApplicantSignUpForm
    template_name = '../templates/applicant_registration.html'

    # send an email verification to a new user's email address

    # redirect to login page after successfully saving  a new user to database 
    def validation(self, form):
        user=form.save()
        login(self.request, user)
        return redirect('/')
