from django.db import models


class Shop(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='shop_images/')
    type = models.CharField(max_length=20)
    description = models.CharField(max_length=155)

    def __str__(self):
        return self.name
