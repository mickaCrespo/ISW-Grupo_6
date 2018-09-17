from django.conf.urls import url, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'^articulos', ArticuloViewSet)
router.register(r'^comercios', ComercioViewSet)
router.register(r'^pedidos', PedidoViewSet)
router.register(r'^pedidos/detalles', DetallePedidoViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]