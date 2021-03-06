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
    # El volumen estara en centimetros (cm)
    volumen = models.PositiveIntegerField()


class Pedido(models.Model):
    EFECTIVO = 0
    VISA = 1
    FORMAS_PAGO = (
        (EFECTIVO, "Efectivo"),
        (VISA, "Tarjeta Visa")
    )

    numero = models.AutoField(primary_key=True)
    # La fecha se define automaticamente cuando se crea el pedido.
    fecha = models.DateTimeField(auto_now_add=True)
    direccion = models.CharField(max_length=256)
    entrega_deseada = models.DateTimeField(blank=True, null=True)
    forma_pago = models.IntegerField(choices=FORMAS_PAGO)
    monto_pago_efectivo = models.DecimalField(blank=True, null=True, max_digits=10, decimal_places=2)

class DetallePedido(models.Model):
    pedido = models.ForeignKey('Pedido', on_delete=models.CASCADE)
    articulo = models.ForeignKey('Articulo', on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        if self._state.adding:
            self.precio = self.articulo.precio
        super().save(*args, **kwargs)
