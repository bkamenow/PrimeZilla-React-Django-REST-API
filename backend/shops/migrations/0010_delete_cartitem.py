# Generated by Django 4.2.6 on 2023-12-04 18:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_remove_appuser_cart'),
        ('shops', '0009_cartitem_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='CartItem',
        ),
    ]