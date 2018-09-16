package Modules.gestionPedidos.ejb;

import Modules.gestionPedidos.dbEntities.T_PEDIDO;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.List;

@Stateless
public class PedidoEJB {
    @PersistenceContext(name = "deliveryEatPersistenceUnit")
    EntityManager entityManager;

    /**
     *Este metodo busca un pedido en la base de datos y lo retorna.
     * Busca en la base de datos el pedido cuyo id sea el id que se pasa por parametro,
     * si lo encunetra lo retorna y si no lo encuentra retorna null.
     *
     * @param  id  id del pedido a buscar
     * @return      pedido correspondiente a la id
     */
    public T_PEDIDO find(long id) {
        TypedQuery<T_PEDIDO> q = (TypedQuery) entityManager.createQuery("SELECT p FROM T_PEDIDO p WHERE p.numero_pedido = :id").setParameter("id",id);
        return q.getSingleResult();
    }

    /**
     *Este metodo busca todos los pedidos en la base de datos
     * Busca en la base de datos todos los pedidos y los retorna, si
     * no encuentra nignuno retorna null
     *
     * @return      lista de pedidos
     */
    public List<T_PEDIDO> findAll() {
        Query q = entityManager.createQuery("SELECT p FROM T_PEDIDO p");
        return q.getResultList();
    }

    /**
     *Este metodo registra el pedido en la base de datos
     * y retorna el id del pedido insertad, si no se puedo insertar retorna -1
     *
     * @param  p  pedido a registrar
     * @return      id del pedido registrado
     */
    public long create(T_PEDIDO p) {
        //entra como parametro la dbEntity correspondiente al pedido y lo agrega a la bd retorna el id del pedido
        return 1;
    }

    public void update(long id) {
        //entra como parametro la dbEntity correspondiente al pedido y lo actualiza

    }

    public void remove(long id) {
        //elimina el pedido de la bd
    }
}
