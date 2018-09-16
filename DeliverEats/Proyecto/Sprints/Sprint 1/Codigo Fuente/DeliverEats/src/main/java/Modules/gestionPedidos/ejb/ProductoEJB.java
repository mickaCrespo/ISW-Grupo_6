package Modules.gestionPedidos.ejb;


import javax.ejb.Stateless;

@Stateless
public class ProductoEJB {

    /**
     * Este metodo busca un producto en la base de datos y lo retorna.
     * Busca en la base de datos el producto cuyo id sea el id que se pasa por parametro,
     * si lo encuentra lo retorna y si no lo encuentra retorna null.
     *
     * @param  id  id del pedido a buscar
     * @return producto correspondiente a la id o null si no existe.
     */
    public void find(long id) {

    }

    /**
     * Busca todos los productos en la base de datos para un comercio.
     * Busca en la base de datos todos los pedidos y los retorna, si
     * no encuentra nignuno retorna null
     *
     * @param comercioId id del comercio
     * @return lista de productos
     */
    public void findAll(long comercioId) {
        //Query q = entityManager.createQuery("SELECT e FROM Empleado e");
        //return q.getResultList();
    }
}

