from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

class User(AbstractUser):
    is_bursaryapplicant = models.BooleanField(default=False)
    is_bursarycommitteeadmin = models.BooleanField(default=False)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100)

class BursaryApplicant(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    ID_number = models.IntegerField()
    email = models.EmailField()
    phone_regex = RegexValidator(
		regex=r'^\+?1?\d{9,15}$',
		message="Phone number must be entered in the format: '+254700000000'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True) # validators should be a list
    dob = models.DateField()
    county = models.CharField(max_length=100, default="Kiambu")
    ward = models.CharField(max_length = 100)
    zip_code = models.IntegerField()
    kra_pin = models.CharField(max_length = 20)

class BursaryCommitteeAdmin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    ID_number = models.IntegerField()
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: '+254700000000'. Up to 15 digits allowed. "
    )
    phone_number = models.CharField(validators=[phone_regex], blank=False, max_length=17)


