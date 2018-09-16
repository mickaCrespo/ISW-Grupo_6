angular.module("app").controller("productosController", function ($scope, productosService) {

    

    $scope.getProductos = function () {
        productosService.getProductos(function (response) {
            $scope.productos = response;
        });
    }

    $scope.getProductos();
    

    });