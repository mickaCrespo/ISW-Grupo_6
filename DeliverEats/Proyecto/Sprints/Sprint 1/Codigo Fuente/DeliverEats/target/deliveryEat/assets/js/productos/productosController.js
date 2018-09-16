angular.module("app").controller("productosController", function ($scope, productosService) {



    $scope.getComercio = function () {
        productosService.getComercio(function (response) {
            $scope.comercio = response;
        });
    }

    $scope.getProductos = function () {
        productosService.getProductos(function (response) {
            $scope.productos = response;
        });
    }

    $scope.getComercio();
    $scope.getProductos();
    

    });