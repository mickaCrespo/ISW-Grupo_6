package Modules.gestionPedidos.ejb;
import Modules.gestionComercios.dbEntities.T_ARTICULO;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Stateless
public class ArticuloEJB {
    @PersistenceContext(name = "deliveryEatPersistenceUnit")
    EntityManager entityManager;

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
    public List<T_ARTICULO> findAll(long comercioId) {
        Query q = entityManager.createQuery("SELECT id_articulo, id_comercio, nombre, descripcion, precio FROM T_ARTICULO a" +
                "WHERE id_comercio = :idComercio").setParameter("idComercio", comercioId);
        return q.getResultList();
    }
}

