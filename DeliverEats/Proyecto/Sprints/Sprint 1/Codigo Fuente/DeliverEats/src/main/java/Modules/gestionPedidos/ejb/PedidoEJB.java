package Modules.gestionPedidos.ejb;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.List;

@Stateless
public class PedidoEJB {
    //@PersistenceContext(name = "beFruitPersistenceUnit")
    //EntityManager entityManager;

    public void find(long id) {
        //TypedQuery<Empleado> q = (TypedQuery) entityManager.createQuery("SELECT e FROM Empleado e WHERE e.idEmpleado = :id").setParameter("id",id);
        //return q.getSingleResult();
    }

    public void findAll() {
        //Query q = entityManager.createQuery("SELECT e FROM Empleado e");
        //return q.getResultList();
    }

    public long create() {
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
