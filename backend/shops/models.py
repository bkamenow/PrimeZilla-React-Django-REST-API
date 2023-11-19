from django.db import models


class Shop(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.URLField()
    type = models.CharField(max_length=20)
    description = models.CharField(max_length=155)

    def __str__(self):
        return self.name


class Item(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.URLField()
    description = models.TextField()
    price = models.FloatField()
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
