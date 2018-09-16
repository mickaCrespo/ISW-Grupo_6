package Modules.gestionComercios.services;

import Modules.gestionComercios.controllers.ArticuloController;
import com.google.gson.Gson;

import javax.ws.rs.*;

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
