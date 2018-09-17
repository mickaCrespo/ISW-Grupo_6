from django.db import models

class Comercio(models.Model):
    nombre = models.CharField(max_length=256)
    descripcion = models.CharField(max_length=256)
    direccion = models.CharField(max_length=256)

class Articulo(models.Model):
    comercio = models.ForeignKey('Comercio', on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256)
    descripcion = models.CharField(max_length=256)
    precio = models.DecimalField(max_digits=10, decimal_places=2)


class Pedido(models.Model):
    numero = models.AutoField(primary_key=True)
    fecha = models.DateTimeField()
    direccion = models.CharField(max_length=256)
    entrega_deseada = models.CharField(max_length=256)
    forma_pago = models.CharField(max_length=256)

class DetallePedido(models.Model):
    pedido = models.ForeignKey('Pedido', on_delete=models.CASCADE)
    articulo = models.ForeignKey('Articulo', on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
