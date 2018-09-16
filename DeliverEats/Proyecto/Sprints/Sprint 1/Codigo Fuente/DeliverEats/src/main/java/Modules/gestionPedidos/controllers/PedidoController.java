package Modules.gestionPedidos.controllers;

import Modules.gestionPedidos.ejb.PedidoEJB;
import Modules.gestionPedidos.modelEntities.PedidoModel;

import javax.ejb.Stateless;
import javax.inject.Inject;

@Stateless
public class PedidoController {
    @Inject
    PedidoEJB pedidoEJB;

    /**
     *Este metodo retorna el pedido cuya id se pasa por parametro.
     * Si lo encuentra lo retorna y si no lo encuentra retorna null.
     * Transforma la entidad de base de datos a una entidad de modelo.
     *
     * @param  id  id del pedido a buscar
     * @return      pedido correspondiente a la id
     */
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
