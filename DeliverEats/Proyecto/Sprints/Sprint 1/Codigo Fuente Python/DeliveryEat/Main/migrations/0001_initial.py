# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-09-16 23:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Articulo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=256)),
                ('descripcion', models.CharField(max_length=256)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Comercio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=256)),
                ('descripcion', models.CharField(max_length=256)),
                ('direccion', models.CharField(max_length=256)),
            ],
        ),
        migrations.AddField(
            model_name='articulo',
            name='comercio',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Main.Comercio'),
        ),
    ]
