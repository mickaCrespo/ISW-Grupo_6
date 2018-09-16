package Modules.gestionPedidos.controllers;


import Modules.gestionPedidos.modelEntities.ArticuloModel;
import Modules.gestionPedidos.ejb.ArticuloEJB;

import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.LinkedList;
import java.util.List;

@Stateless
public class ArticuloController {
    @Inject
    ArticuloEJB articuloEJB;

    public void find(long id) {
        //buscar un articulo por id

    }

    public List<ArticuloModel> findFromCommerce(int idComercio){
        // articuloEJB.findAll(idComercio);
        // TODO: Hay que convertir las Entity que devuelve el articuloEJB a Articulo Model.

        // Por ahora mockeo.
        List<ArticuloModel> articulos = new LinkedList<ArticuloModel>();
        for (int i = 0; i < 6; i++){
            ArticuloModel articulo = new ArticuloModel();
            articulo.setId(i);
            articulo.setIdComercio(1);
            articulo.setNombre("Producto " + i);
            articulo.setDescripcion("Descripcion del Producto");
            articulo.setPrecio(199.99);
            articulos.add(articulo);
        }
        // Fin del mockeo.

        return articulos;
    }

}
