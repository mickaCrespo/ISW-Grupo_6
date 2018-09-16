package Modules.gestionComercios.controllers;

import Modules.gestionComercios.dbEntities.T_COMERCIO;
import Modules.gestionComercios.ejb.ComercioEJB;
import Modules.gestionComercios.modelEntities.ComercioModel;

import javax.ejb.Stateless;
import javax.inject.Inject;

@Stateless
public class ComercioController {
    @Inject
    ComercioEJB comercioEJB;
    @Inject
    ArticuloController articuloController;

    /**
     *Este metodo retorna el comercio cuya id se pasa por parametro.
     * Si lo encuentra lo retorna y si no lo encuentra retorna null.
     * Transforma la entidad de base de datos a una entidad de modelo y busca
     * todos los articulos pertenecientes a dicho Comercio.
     *
     * @param  id  id del comercio a buscar
     * @return      comercio correspondiente a la id
     */
    public ComercioModel find(int id) {
        T_COMERCIO c = comercioEJB.find(id);
        return convertirComercio(c);
    }


    /**
     *Este metodo convierte una entidad de base de datos a una entidad de modelo
     *
     * @param  c  entidad de base de datos del comercio
     * @return      comercio en entidad modelo
     */
    private ComercioModel convertirComercio(T_COMERCIO c){
        ComercioModel cm = new ComercioModel();

        cm.setNombre(c.getNombre());
        cm.setDescripcion(c.getDescripcion());
        cm.setDireccion(c.getDireccion());
        cm.setArticulos(articuloController.findAll(c.getIdComercio()));

        return cm;
    }
}
