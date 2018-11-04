angular.module("app").factory('productosService', ['$http',
    function ($http) {
        var service = {};

        service.getComercio = function (id, callback) {
            $http.get('/api/comercios/' + id).then(function (response) {
                callback(response.data);
            });
        }
        service.getProductos = function (id, callback) {
            $http.get('/api/articulos/?comercio_id=' + id).then(function (response) {
                callback(response.data);
            });
        }

        return service;

    }
]);