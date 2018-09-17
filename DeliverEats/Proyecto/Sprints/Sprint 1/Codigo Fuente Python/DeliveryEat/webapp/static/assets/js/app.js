var app = angular.module("app", []);

app.controller("deliverEatController", function ($scope, $http) {

    $scope.title = "Hace tu pedido";
    $scope.accion = "catalogo";

    $scope.continuarPedido = function () {
        $scope.accion = "confirmPedido";
        var pedido = {};
        pedido.paraCuando = '0';
        $scope.p = pedido;
    }

    $scope.cancelarConfirmPedido = function () {
        $scope.accion = "catalogo";
    }

    /* EJEMPLO DE POST
    var comercio ={
            "nombre" : "Jaime",
            "descripcion" : "Hola",
            "direccion" : "Ahi"
        }
    ;
    $http.post('/api/comercios/', comercio, {
        headers: {
            'Content-Type' : 'application/json'
        },
    }).then(function (response) {
        alert(response);
    }, function error(e) {
        console.log(e);
    });
    */
    //EJEMPLO DE POST PEDIDO
    var pedido ={
            "fecha" : "2018-01-01T00:00",
            "direccion" : "Hola",
            "entrega_deseada" : "Ahi",
            "forma_pago" : "Asi",
            "detalles" : [{
                "articulo_id" : 1,
                "cantidad" : 1,
                "precio" : 10
            },
            {
                "articulo_id" : 2,
                "cantidad" : 1,
                "precio" : 10
            }
            ]
        }
    ;
    $http.post('/api/pedidos/', pedido, {
        headers: {
            'Content-Type' : 'application/json'
        },
    }).then(function (response) {
        alert(response);
    }, function error(e) {
        console.log(e);
    });
    //*/
});

