from .models import Comercio, Articulo, Pedido, DetallePedido
from rest_framework import serializers

class ComercioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comercio
        fields = '__all__'


class ArticuloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articulo
        fields = '__all__'

class DetallePedidoSerializer(serializers.ModelSerializer):
    pedido = serializers.IntegerField(read_only=True)
    precio = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = DetallePedido
        fields = ['pedido', 'articulo', 'cantidad', 'precio']

class PedidoSerializer(serializers.ModelSerializer):
    numero = serializers.IntegerField(read_only=True)
    fecha = serializers.DateTimeField(read_only=True)
    detalles = DetallePedidoSerializer(many=True, write_only=True)
    tarjeta = serializers.DictField(write_only=True, required=False, allow_null=True)

    class Meta:
        model = Pedido
        fields = '__all__'

    def validate(self, data):
        tarjeta = data.pop("tarjeta", None)
        if tarjeta:
            self.validate_tarjeta(tarjeta)
        return super().validate(data)

    def validate_tarjeta(self, tarjeta):
        """
        :param tarjeta: {numero, titular, dia_expiracion, year_expiracion, pin}
        :return:
        """
        valid = True
        print("Validando tarjeta ", tarjeta)
        # TODO: Comunicacion con API VISA para validar la tarjeta.
        if not valid:
            raise serializers.ValidationError("Los datos de la tarjeta son inválidos.")


    def create(self, validated_data):
        detalles = validated_data.pop('detalles')
        pedido = Pedido.objects.create(**validated_data)
        for detalle in detalles:
            DetallePedido.objects.create(pedido=pedido, **detalle)
        return pedido