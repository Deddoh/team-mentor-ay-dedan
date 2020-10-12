from django.contrib import admin
from .models import User, BursaryApplicant, BursaryCommitteeAdmin
# Register your models here.

admin.site.register(User)
admin.site.register(BursaryApplicant)
admin.site.register(BursaryCommitteeAdmin)
