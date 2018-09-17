from .models import Comercio, Articulo, Pedido, DetallePedido
from rest_framework import viewsets
from .serializers import ComercioSerializer, ArticuloSerializer, PedidoSerializer, DetallePedidoSerializer


class ComercioViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Comercio.objects.all()
    serializer_class = ComercioSerializer


class ArticuloViewSet(viewsets.ModelViewSet):
    queryset = Articulo.objects.all()
    serializer_class = ArticuloSerializer

class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer

class DetallePedidoViewSet(viewsets.ModelViewSet):
    queryset = DetallePedido.objects.all()
    serializer_class = DetallePedidoSerializer