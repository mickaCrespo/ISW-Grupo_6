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

    class Meta:
        model = DetallePedido
        fields = ['pedido', 'articulo', 'cantidad', 'precio']

class PedidoSerializer(serializers.ModelSerializer):
    numero = serializers.IntegerField(read_only=True)
    detalles = DetallePedidoSerializer(many=True, write_only=True)

    class Meta:
        model = Pedido
        fields = '__all__'

    def create(self, validated_data):
        detalles = validated_data.pop('detalles')
        pedido = Pedido.objects.create(**validated_data)
        for detalle in detalles:
            DetallePedido.objects.create(pedido=pedido, **detalle)
        return pedido