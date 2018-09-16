package Modules.gestionComercios.controllers;


import Modules.gestionComercios.dbEntities.T_ARTICULO;
import Modules.gestionComercios.modelEntities.ArticuloModel;
import Modules.gestionComercios.ejb.ArticuloEJB;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@Stateless
public class ArticuloController {
    @Inject
    ArticuloEJB articuloEJB;

    /**
     *Este metodo retorna el articulo cuya id se pasa por parametro.
     * Si lo encuentra lo retorna y si no lo encuentra retorna null.
     * Transforma la entidad de base de datos a una entidad de modelo.
     *
     * @param  id  id del articulo a buscar
     * @return      articulo correspondiente a la id
     */
    public ArticuloModel find(long id) {
        T_ARTICULO a = articuloEJB.find(id);
        return convertirArticulo(a);

    }

    /**
     * Retorna todos los productos pertenecientes a un comercio.
     * Si encuentra articulos los retorna, si no encuentra nignuno retorna null.
     * Transforma las entidades de base de datos a una entidad de modelo.
     *
     * @param idComercio del comercio
     * @return lista de productos
     */
    public List<ArticuloModel> findAll(int idComercio){
        List<T_ARTICULO> articulos = articuloEJB.findAll(idComercio);
        ArrayList<ArticuloModel> articulosModel = new ArrayList<ArticuloModel>();

        for(T_ARTICULO a: articulos){
            articulosModel.add(convertirArticulo(a));
        }

        return articulosModel;
    }

    /**
     *Este metodo convierte una entidad de base de datos a una entidad de modelo
     *
     * @param  a  entidad de base de datos del articulo
     * @return      articulo en entidad modelo
     */
    private ArticuloModel convertirArticulo(T_ARTICULO a){
        ArticuloModel am = new ArticuloModel();

        am.setId(a.getIdArticulo());
        am.setIdComercio(a.getIdComercio());
        am.setNombre(a.getNombre());
        am.setDescripcion(a.getNombre());
        am.setPrecio(a.getPrecio());

        return am;
    }

}
