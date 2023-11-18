from django.db import models
from accounts.models import AppUser


# Create your models here.


class Shop(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='shop_images/')
    type = models.CharField(max_length=20)
    description = models.CharField(max_length=155)
    owner = models.ForeignKey(AppUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
