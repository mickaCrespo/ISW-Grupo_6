var app = angular.module("app", []);

app.controller("deliverEatController", function ($scope, $http) {

    $scope.title = "probando...";
    $scope.accion = "catalogo";


    //Utilities...




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

    $scope.validarDatosForm = function (p, t) {
        //Valida campos obligatorios completos
        if ((p.direccion == undefined) || (p.paraCuando == undefined) || (p.formaPago == undefined)) {
            $scope.error = "Faltan completar datos...";
        }
        //Validaciones para pago en efectivo
        if (p.formaPago == 0) {
            //Efectivo con el que se paga >= Total
            if (p.efectivo < p.total) {
                $scope.error = "El monto a pagar debe ser igual o menor al total...";
            }
        }
        //Validaciones para pago con tarjeta
        else {
            //Valida datos completos de la tarjeta
            if ((t.nro == undefined) || (t.nombre == undefined) || (t.expiracionMes == undefined) || (t.expiracionAnio == undefined)) {
                $scope.error = "Faltan completar datos de la tarjeta...";
            }
            else {
               /* var fecha = new Date;
                fecha.setUTCFullYear(t.expiracionAnio, t.expiracionMes, 01);*/

            }
        }

        

    }

});

