from django.contrib.auth.forms import UserCreationForm
# send details to the db as soon as its submitted, in a single transaction
from django.db import transaction
from django import forms
from .models import User, BursaryCommitteeAdmin, BursaryApplicant

# student registration form
class ApplicantSignUpForm(UserCreationForm):
    first_name = forms.CharField(required=True)
    middle_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    phone = forms.CharField(required=True)

    class Meta(UserCreationForm.Meta):
        model = User
    
    # save changes in db if the code block is successfully run
    @transaction.atomic
    # function to save to db
    def save(self):
        user = super().save(commit=False)
        user.is_bursaryapplicant = True
        user.first_name = self.cleaned_data.get('first_name')
        user.middle_name = self.cleaned_data.get('middle_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.save()
        applicant = BursaryApplicant.objects.create(user=user)
        applicant.email = self.cleaned_data.get('email')
        applicant.phone_number = self.cleaned_data.get('phone')
        applicant.save()
        return user


# committee admin sign up form
class BursaryAdminSignUpForm(UserCreationForm):
    first_name = forms.CharField(required=True)
    middle_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)
    ID_Number = forms.CharField(required=True)
    phone = forms.CharField(required=True)

    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_bursarycommitteeadmin = True
        user.first_name = self.cleaned_data.get('first_name')
        user.middle_name = self.cleaned_data.get('middle_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.save()

        b_admin = BursaryCommitteeAdmin.objects.create(user=user)
        b_admin.ID_number = self.cleaned_data.get('ID_Number')
        b_admin.phone_number = self.cleaned_data.get('phone')
        b_admin.save()
        return user



