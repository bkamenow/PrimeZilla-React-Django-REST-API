from django.db import models
from accounts.models import AppUser


class Shop(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.URLField()
    type = models.CharField(max_length=20)
    description = models.CharField(max_length=155)
    owner = models.ForeignKey(
        AppUser, on_delete=models.CASCADE, related_name='owner_shops')

    def __str__(self):
        return self.name


class Item(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.URLField()
    description = models.TextField()
    price = models.FloatField()
    shop = models.ForeignKey(
        Shop, on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return self.name
