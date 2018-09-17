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
});

