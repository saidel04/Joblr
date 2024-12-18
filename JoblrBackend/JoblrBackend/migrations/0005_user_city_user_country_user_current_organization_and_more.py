# Generated by Django 5.1.4 on 2024-12-10 12:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JoblrBackend', '0004_alter_userdata_current_organization_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='city',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='country',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='current_organization',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='current_roll',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='currentlyEmployed',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='education',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='githubLink',
            field=models.URLField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='linkedinLink',
            field=models.URLField(blank=True, default='', max_length=255),
        ),
        migrations.DeleteModel(
            name='UserData',
        ),
    ]
