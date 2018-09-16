package Modules.gestionComercios.ejb;
import Modules.gestionComercios.dbEntities.T_ARTICULO;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
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
    public T_ARTICULO find(long id) {
        TypedQuery<T_ARTICULO> q = (TypedQuery) entityManager.createQuery("SELECT a FROM T_ARTICULO a WHERE a.idArticulo = :id")
        .setParameter("id",id);
        return q.getSingleResult();
    }

    /**
     * Busca todos los productos en la base de datos para un comercio.
     * Busca en la base de datos todos los pedidos y los retorna, si
     * no encuentra nignuno retorna null
     *
     * @param idComercio id del comercio
     * @return lista de productos
     */
    public List<T_ARTICULO> findAll(long idComercio) {
        Query q = entityManager.createQuery("SELECT a FROM T_ARTICULO a WHERE a.idComercio = :idComercio")
                .setParameter("idComercio", idComercio);
        return q.getResultList();
    }
}

