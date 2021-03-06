# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-09-17 01:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DetallePedido',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.PositiveIntegerField()),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('articulo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Main.Articulo')),
            ],
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('numero', models.IntegerField(primary_key=True, serialize=False)),
                ('fecha', models.DateTimeField()),
                ('direccion', models.CharField(max_length=256)),
                ('entrega_deseada', models.CharField(max_length=256)),
                ('forma_pago', models.CharField(max_length=256)),
            ],
        ),
        migrations.AddField(
            model_name='detallepedido',
            name='pedido',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Main.Pedido'),
        ),
    ]
