from django.db import models
from django.contrib.auth.models import AbstractUser

class MyUser(AbstractUser):
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

    def __str__(self):
        return f'Name{self.first_name} {self.last_name}'
