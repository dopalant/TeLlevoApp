# Generated by Django 4.1.4 on 2023-11-14 01:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0003_rename_conductor_viaje_conductor_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='viaje',
            name='calificacion',
            field=models.CharField(default=1, max_length=3),
        ),
    ]