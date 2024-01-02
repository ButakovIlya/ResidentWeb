from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from datetime import date


class ContactUser(models.Model):
    fio = models.CharField(max_length=100,blank=False, null=False)
    message = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=50,blank=True, null=True)
    email = models.CharField(max_length=50,blank=True, null=True)
    requestType = models.CharField(max_length=50,blank=True, null=True)


    def __str__(self):
        return self.fio

