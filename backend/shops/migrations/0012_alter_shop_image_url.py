# Generated by Django 4.2.6 on 2023-12-04 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shops', '0011_cart_cartitem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='image_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]