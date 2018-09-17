var app = angular.module("app", []);

app.controller("deliverEatController", function ($scope, $http) {

    $scope.title = "Hace tu pedido";
    $scope.accion = "catalogo";
    $scope.carrito=[];
    $scope.nvoArtPedido={};
    $scope.total = 0;
    
    //Ventas...
    $scope.eliminarArt=function(i,a){
        a.cant = a.cant - 1;
        a.total = a.cant * a.precio;
        $scope.total = $scope.total - a.precio;
        if (a.cant === 0) {
            $scope.carrito.splice(i, 1);
        }
    };
    $scope.confirmarPedido=function(i){
        //VER
    };

    $scope.cancelVenta=function(){
        $scope.total =0;
        $scope.carrito=[];
    };

    $scope.addNvoArtPedido=function( nombre, precio){
        $scope.nvoArtPedido.nombre=nombre;
        $scope.nvoArtPedido.cant = 1;
        $scope.nvoArtPedido.precio = precio;

        $scope.nvoArtPedido.total = $scope.nvoArtPedido.cant * $scope.nvoArtPedido.precio;
        $scope.total = $scope.total + $scope.nvoArtPedido.total;

        var item73 = $scope.carrito.filter(function (item) {
            return item.nombre === $scope.nvoArtPedido.nombre;
        })[0];

        if (item73 != null) {
            item73.cant = item73.cant + $scope.nvoArtPedido.cant;
            item73.total = item73.total + $scope.nvoArtPedido.total;
            $scope.nvoArtPedido={};
        }
        else
        {
            $scope.carrito.push($scope.nvoArtPedido);
            $scope.nvoArtPedido={};
        }

    }
    
    //Botones...
    $scope.continuarPedido = function () {
        $scope.accion = "confirmPedido";
        var pedido = {};
        pedido.paraCuando = '0';
        pedido.total = 210;
        $scope.p = pedido;
        $scope.fecha = new Date();
    }

    $scope.cancelarConfirmPedido = function () {
        $scope.accion = "catalogo";

    }
    
    //Validaciones...

    $scope.validarCamposObligatorios = function (p) {
        if ((p.direccion == undefined) || (p.paraCuando == undefined) || (p.formaPago == undefined)) {
            $scope.error = "Faltan completar datos...";
            return false;
        }
        else {
            $scope.error = "";
            return true;
        }
    }

    $scope.validarfechaEntrega = function (p) {
        if (p.paraCuando == '1') {
            if ((p.fecha == undefined) || (p.hora == undefined)) {
                $scope.error = "Faltan completar datos...";
                return false;
            }
            else {
                //Valida que la fecha y hora de entrega sean posteriores a la actual
                var today = new Date();
                var fecha = new Date();
                fecha.setHours(p.hora.getHours(), p.hora.getMinutes(), 0, 0);
                if (p.fecha < today) {
                    $scope.error = "Fecha de entrega incorrecta...";
                    return false;
                }
                else {
                    if (fecha < today) {
                        $scope.error = "Hora de entrega incorrecta...";
                        return false;
                    }
                    else {
                        $scope.error = "";
                        return true;
                    }
                }
            }
        }
        else {
            return true;
        }
    }

    $scope.validarpagoEfectivo = function (p) {
        if (p.efectivo === undefined) {
            $scope.error = "Ingrese el monto con el que va a pagar...";
            return false;
        }
        else {
            
            if (p.efectivo < p.total) {
                $scope.error = "El monto a pagar debe ser igual o menor al total...";
                return false;
            }
            else {
                $scope.error = "";
                return true;
            }

        }
    }

    $scope.validarpagoTarjeta = function (p) {
        //Valida datos completos de la tarjeta
        if ((p.nroTarjeta == null) || (p.nombreTarjeta === undefined) || (p.expiracionMes === undefined) || (p.expiracionAnio === undefined) || (p.codTarjeta === undefined)) {
            alert(p.nroTarjeta);
            $scope.error = "Faltan completar datos de la tarjeta...";
            return false;
        }
        else {
            //Valida que la fecha de expiración no haya pasado
            var today = new Date();
            var fecha = new Date();
            fecha.setUTCFullYear(p.expiracionAnio, p.expiracionMes, null);
            if (fecha < today) {
                $scope.error = "Fecha de expiración incorrecta...";
                return false;
            }
            else {
                $scope.error = "";
                return true;

            }

        }
    }


    $scope.validarDatosForm = function (p) {
        //Si los campos obligatorios estan completos...
        if ($scope.validarCamposObligatorios(p) == true) {
            //Si la entrega es programada...
            if ($scope.validarfechaEntrega(p) == true) {
                //Validaciones para pago en efectivo
                if (p.formaPago == 0) {
                    if ($scope.validarpagoEfectivo(p) == true) {
                        alert("pedido listo para ser realizado...");
                    }

                }
                else {
                    if ($scope.validarpagoTarjeta(p) == true) {
                        alert("pedido listo para ser realizado...");
                    }

                }
            }
        }
    }

});
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
    /*//EJEMPLO DE POST PEDIDO
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


