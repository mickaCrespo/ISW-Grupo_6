package Modules.gestionComercios.services;

import Modules.gestionPedidos.controllers.ArticuloController;
import com.google.gson.Gson;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

@Path("/comercio")
public class ComercioService {

    @GET
    @Path("/{id}/articulos")
    @Consumes("application/json")
    @Produces("application/json")
    public Gson getArticulos(@PathParam("id") int id){
        Gson gson = new Gson();
        ArticuloController articuloController = new ArticuloController();
        gson.toJson(articuloController.findFromCommerce(id));
        return gson;
    }
}
