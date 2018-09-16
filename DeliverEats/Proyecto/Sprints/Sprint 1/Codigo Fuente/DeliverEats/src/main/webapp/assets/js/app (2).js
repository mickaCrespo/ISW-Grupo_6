<div class="form-row col-lg-6">
    <label>Dirección de entrega</label>
    <div class="form-row">

        <div class="col-8">
            <input type="text" class="form-control" placeholder="Dirección">
                </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Piso">
                                                            </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Depto">
                                                            </div>

                </div>
                <label>¿Para cuándo lo desea?</label>
                <div class="form-row">
                    <div class="col-4">
                        <select ng-model="p.paraCuando" class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option value='0' selected>Lo antes posible</option>
                            <option value='1'>Elegir fecha y hora</option>
                        </select>
                    </div>
                    <div class="form-row col" ng-show="p.paraCuando == 1">
                        <div class="col">
                            <input class="form-control" type="date" value="" id="example-date-input">

                                                                </div>
                            <div class="col">
                                <input class="form-control" type="time" value="" id="example-time-input">
                                                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row col-lg-6">
                        <label>Forma de pago</label>
                        <div class="form-row col-12">
                            <div class="form-group form-check">
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" ng-model="p.formaPago" value="0">
                                        <label class="custom-control-label" for="customRadio1">Efectivo</label>
                                                                </div>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" ng-model="p.formaPago" value="1">
                                            <label class="custom-control-label" for="customRadio2">Tarjeta VISA</label>
                                                                </div>
                                    </div>
                                    <div class="col-4" style="padding-left:50px;">
                                        <div class="col">
                                            <label>Ingresa con cuánto vas a pagar: $</label>
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Depto">
                                                                </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

