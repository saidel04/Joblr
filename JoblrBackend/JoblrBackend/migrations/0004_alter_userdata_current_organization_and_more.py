# Generated by Django 5.1.4 on 2024-12-10 01:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JoblrBackend', '0003_userdata'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdata',
            name='current_organization',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='current_roll',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='education',
            field=models.CharField(default='', max_length=255),
        ),
    ]
