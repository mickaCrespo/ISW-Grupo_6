angular.module("app").factory('productosService', ['$http',
    function ($http) {
        var service = {};

        service.getComercio = function (callback) {
            /*$http.get('aqui va la uri...').then(function (response) {
                callback(response);
            });*/

            var response = { "id": 1, "nombre": "El club de la milanesa" };
            callback(response);

        }


        service.getProductos = function (callback) {
            /*$http.get('aqui va la uri...').then(function (response) {
                callback(response);
            });*/

            var response = [{ "id": 1, "nombre": "Milanesa patagónica con guarnición", "descripcion": "Muzzarella, fiambre con hierbas ahumado, tomates cherry confitados y rúcula.", "precio": 269 },
            { "id": 2, "nombre": "Milanesa de la casa con guarnición", "descripcion": "Muzzarella, fiambre con hierbas ahumado, tomates cherry confitados y rúcula.", "precio": 247 },
            { "id": 3, "nombre": "Milanesa La Gringa con guarnición", "descripcion": "Muzzarella, fiambre con hierbas ahumado, tomates cherry confitados y rúcula.", "precio": 250 },
            { "id": 4, "nombre": "Sándwich de bondiola barbacue con papas rústicas", "descripcion": "Muzzarella, fiambre con hierbas ahumado, tomates cherry confitados y rúcula.", "precio": 190 },
            { "id": 5, "nombre": "Rabas", "descripcion": "Muzzarella, fiambre con hierbas ahumado, tomates cherry confitados y rúcula.", "precio": 180 },
            { "id": 6, "nombre": "Tacos de pollo", "descripcion": "2 tortillas de trigo rellenas con mix de vegetales y pollo, con cazuela de guacamole y mayonesa casera.", "precio": 165 }];
            callback(response);
        }

        return service;

    }



]);