# Generated by Django 4.2 on 2023-10-17 13:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0012_alter_texttext_audiourl'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='texttext',
            name='audioURL',
        ),
    ]
