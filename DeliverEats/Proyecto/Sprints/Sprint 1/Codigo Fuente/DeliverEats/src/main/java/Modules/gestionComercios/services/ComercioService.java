package Modules.gestionComercios.services;

import Modules.gestionComercios.controllers.ComercioController;
import com.google.gson.Gson;

import javax.inject.Inject;
import javax.ws.rs.*;

@Path("/comercio")
public class ComercioService {
    @Inject
    ComercioController comercioController;

    @GET
    @Path("/{id}")
    @Consumes("application/json")
    @Produces("application/json")
    public Gson get(@PathParam("id") int id){
        Gson gson = new Gson();
        gson.toJson(comercioController.find(id));
        return gson;
    }
}
