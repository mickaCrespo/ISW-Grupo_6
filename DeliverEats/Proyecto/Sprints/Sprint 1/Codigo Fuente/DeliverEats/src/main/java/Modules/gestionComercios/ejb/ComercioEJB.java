package Modules.gestionComercios.ejb;


import Modules.gestionComercios.dbEntities.T_COMERCIO;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@Stateless
public class ComercioEJB {
    @PersistenceContext(name = "deliveryEatPersistenceUnit")
    EntityManager entityManager;

    /**
     * Este metodo busca un comercio en la base de datos y lo retorna.
     * Busca en la base de datos el producto cuyo id sea el id que se pasa por parametro,
     * si lo encuentra lo retorna y si no lo encuentra retorna null.
     *
     * @param  id  id del comercio a buscar
     * @return comercio o null si no existe.
     */
    public T_COMERCIO find(int id) {
        TypedQuery<T_COMERCIO> q = (TypedQuery) entityManager.createQuery("SELECT c FROM T_COMERCIO c WHERE c.idComercio = :id")
                .setParameter("id",1);
        return q.getSingleResult();
    }
}

