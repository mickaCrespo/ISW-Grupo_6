package Modules.gestionPedidos.ejb;


import javax.ejb.Stateless;

@Stateless
public class ComercioEJB {
    /**
     * Este metodo busca un comercio en la base de datos y lo retorna.
     * Busca en la base de datos el producto cuyo id sea el id que se pasa por parametro,
     * si lo encuentra lo retorna y si no lo encuentra retorna null.
     *
     * @param  id  id del comercio a buscar
     * @return comercio o null si no existe.
     */
    public void find(long id) {

    }
}

