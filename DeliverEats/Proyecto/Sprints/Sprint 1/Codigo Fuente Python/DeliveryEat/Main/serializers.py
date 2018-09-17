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
    class Meta:
        model = DetallePedido
        fields = ['pedido_id', 'articulo_id', 'cantidad', 'precio']

class PedidoSerializer(serializers.ModelSerializer):
    detalles = DetallePedidoSerializer(many=True)

    class Meta:
        model = Pedido
        fields = '__all__'
    #
    # def create(self, validated_data):
    #     detalles = validated_data.pop('profile')
    #     user = User.objects.create(**validated_data)
    #     Profile.objects.create(user=user, **profile_data)
    #     return user
