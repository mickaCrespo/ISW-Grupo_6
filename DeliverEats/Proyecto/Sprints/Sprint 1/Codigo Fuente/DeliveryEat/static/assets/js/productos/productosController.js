angular.module("app").controller("productosController", function ($scope, productosService) {
    $scope.getComercio = function (id) {
        productosService.getComercio(id, function (response) {
            $scope.comercio = response;
        });
    }

    $scope.getProductos = function (id) {
        productosService.getProductos(id, function (response) {
            $scope.productos = response;
        });
    }

    var id = 1; // ID del comercio
    $scope.getComercio(id);
    $scope.getProductos(id);
    
});