package Modules.gestionComercios.services;

import Modules.gestionComercios.controllers.ArticuloController;
import com.google.gson.Gson;

import javax.inject.Inject;
import javax.ws.rs.*;

@Path("/articulo")
public class ArticuloService {
    @Inject
    ArticuloController articuloController;

    @GET
    @Path("/{id}")
    @Consumes("application/json")
    @Produces("application/json")
    public String getArticulos(@PathParam("id") int id){
        Gson gson = new Gson();
        String json = gson.toJson(articuloController.findAll(id));
        return json;
    }

}