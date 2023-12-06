from django.db import models
from accounts.models import AppUser


class Shop(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.URLField(null=True, blank=True)
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


class CartItem(models.Model):
    owner = models.ForeignKey(
        AppUser, on_delete=models.CASCADE, related_name='owner_cart')
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} x {self.item.name}"
