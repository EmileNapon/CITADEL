# Generated by Django 4.2 on 2023-11-16 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EmployeData', '0003_remove_texttext_audiourl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='texttext',
            name='nouvellesDonnees',
            field=models.BooleanField(default=True),
        ),
    ]
