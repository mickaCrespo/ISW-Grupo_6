package Modules.gestionPedidos.controllers;

import Modules.gestionPedidos.ejb.PedidoEJB;
import Modules.gestionPedidos.modelEntities.PedidoModel;

import javax.ejb.Stateless;
import javax.inject.Inject;

@Stateless
public class PedidoController {
    @Inject
    PedidoEJB pedidoEJB;

    public void find(long id) {
        //buscar un pedido por id

    }

    public long create(PedidoModel fm)
    {   //Crear un pedido y retornar su numero de id
        return 0;
    }

    public boolean update(long id, PedidoModel fm) {
       //actualizar el pedido
        return false;
    }

    public void remove(long id) {
        //cancelar el pedido
         }

}
