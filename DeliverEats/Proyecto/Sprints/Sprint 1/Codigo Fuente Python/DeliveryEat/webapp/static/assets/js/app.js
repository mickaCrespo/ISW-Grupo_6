var app = angular.module("app", []);

app.controller("deliverEatController", function ($scope, $http) {

    $scope.title = "Tu pedido";
    $scope.accion = "catalogo";
    $scope.carrito=[];
    $scope.nvoArtPedido={};
    $scope.total = 0;
    $scope.p = {
        "tarjeta" : null
    }
    
    //Ventas...
    $scope.eliminarArt=function(i,a){
        a.cant = a.cant - 1;
        a.total = a.cant * a.precio;
        $scope.total = $scope.total - a.precio;
        if (a.cant === 0) {
            $scope.carrito.splice(i, 1);
        }
    };

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    function formatTime(time){
        return [time.getHours(), time.getMinutes()].join(':');
    }

    $scope.confirmarPedido=function(i){
        // Correr Validaciones
        if($scope.validarDatosForm($scope.p)){
            var form = $scope.p;
            // Datos del pedido
            var pedido ={
                    "direccion" : form.direccion,
                    "entrega_deseada" : null,
                    "forma_pago" : form.formaPago,
                    "detalles" : [],
                    "tarjeta" : null
            };
            // Fecha y Hora de entrega
            if(form.paraCuando == 1){
                pedido.entrega_deseada = formatDate(form.fecha_entrega) + "T" + formatTime(form.hora_entrega);
            }
            // Datos de tarjeta
            if(form.formaPago == 1){
                pedido.tarjeta = {
                    "numero" : form.tarjeta_numero,
                    "titular" : form.tarjeta_titular,
                    "mes_expiracion" : form.tarjeta_mes_expiracion,
                    "year_expiracion" : form.tarjeta_year_expiracion,
                    "pin" : form.tarjeta_pin
                }
            } else if (form.formaPago == 0){
                pedido.monto_pago_efectivo = form.efectivo;
            };
            // Datos de articulos
            $scope.carrito.forEach(function(articulo, index) {
                pedido.detalles.push({
                    "articulo" : articulo.id,
                    "cantidad" : articulo.cant,
                });
            });
            console.log("Realizando pedido");
            console.dir(pedido);

            // POST
            $http.post('/api/pedidos/', pedido, {
                headers: {
                    'Content-Type' : 'application/json'
                },
            }).then(function (response) {
                alert("Su pedido fue realizado correctamente.")
                $scope.cancelVenta();
                $scope.cancelarConfirmPedido();
            }, function error(e) {
                console.log(e);
                var message = [];
                angular.forEach(e.data, function(value, key){
                    message.push("Error en " + key + ": " + value);
                });
                $scope.error = message.join(" | ");
            });
        }
    };

    $scope.cancelVenta=function(){
        $scope.total =0;
        $scope.carrito=[];
    };

    $scope.addNvoArtPedido=function(producto){
        $scope.nvoArtPedido = producto;
        $scope.total = $scope.total + parseFloat($scope.nvoArtPedido.precio);

        // Valida si ya existe y aumenta la cantidad.
        var item73 = $scope.carrito.filter(function (item) {
            return item.id === $scope.nvoArtPedido.id;
        })[0];

        if (item73 != null) {
            item73.cant = item73.cant + 1;
            item73.total = item73.total + parseFloat($scope.nvoArtPedido.precio);
            $scope.nvoArtPedido={};
        }
        else
        {
            $scope.nvoArtPedido.cant = 1;
            $scope.nvoArtPedido.total = parseFloat($scope.nvoArtPedido.precio);
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
        // Reiniciar campos
        $scope.p.direccion = null;
        $scope.p.formaPago = 0;
        $scope.p.tarjeta_numero = null;
        $scope.p.tarjeta_titular = null;
        $scope.p.tarjeta_mes_expiracion = null;
        $scope.p.tarjeta_year_expiracion = null;
        $scope.p.tarjeta_pin = null;
        $scope.p.paraCuando = 0;
        $scope.error = null;
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
            if ((p.fecha_entrega == undefined) || (p.hora_entrega == undefined)) {
                $scope.error = "Debe definir una fecha de entrega.";
                return false;
            }
            else {
                //Valida que la fecha y hora de entrega sean posteriores a la actual
                var today = new Date();
                if (p.fecha_entrega < today) {
                    $scope.error = "La fecha y hora de entrega deben ser futuras.";
                    return false;
                    // TODO: Validar hora.
                }
            }
        }
        return true;
    }

    $scope.validarpagoEfectivo = function (p) {
        if (p.efectivo === undefined) {
            $scope.error = "Ingrese el monto con el que va a pagar...";
            return false;
        }
        else {
            
            if (p.efectivo < p.total) {
                $scope.error = "El monto a pagar debe ser igual o mayor al total...";
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
        var valida = true;
        if ((p.tarjeta_numero == null) || (p.tarjeta_titular == null) || (p.tarjeta_mes_expiracion == null) || (p.tarjeta_year_expiracion == null) || (p.tarjeta_pin == null)) {
            $scope.error = "Todos los datos de la tarjeta son obligatorios.";
            valida = false;
        }
        return valida;
    }


    $scope.validarDatosForm = function (p) {
        $scope.error = null;
        //Si los campos obligatorios estan completos...
        if ($scope.validarCamposObligatorios(p) == true) {
            //Si la entrega es programada...
            if ($scope.validarfechaEntrega(p) == true) {
                //Validaciones para pago en efectivo
                if (p.formaPago == 0) {
                    if ($scope.validarpagoEfectivo(p) == true) {
                        return true;
                        //alert("pedido listo para ser realizado...");
                    }

                }
                else {
                    if ($scope.validarpagoTarjeta(p) == true) {
                        return true;
                        //alert("pedido listo para ser realizado...");
                    }

                }
            }
        }
        return false;
    }

});


