angular.module("app").factory("productosService", ['$http',
    function ($http) {
        var service = {};

        service.getProductos = function (callback) {
            /*$http.get('aqui va la uri...').then(function (response) {
                callback(response);
            });*/

            id, nombre, descripcion, precio, foto

            var response = [{ "id": 1, "nombre": "Milanesa patagónica con guarnición", "descripcion": "Muzzarella, fiambre con hierbas ahumado, tomates cherry confitados y rúcula.", "precio": 269 },
            {}, {}, {}, {}, {}];
        }

    }




]);