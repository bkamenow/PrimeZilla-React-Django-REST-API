from django.db import models
from django.contrib.auth.models import AbstractUser


class MyUser(AbstractUser):
    profile_picture = models.ImageField(
        upload_to='profile_pics/', blank=True, null=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.username
