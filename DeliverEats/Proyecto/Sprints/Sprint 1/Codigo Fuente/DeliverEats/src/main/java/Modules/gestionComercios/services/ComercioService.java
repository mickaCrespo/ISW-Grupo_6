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
    //@Path("/{id}")
    @Consumes("application/json")
    @Produces("application/json")
    public String get(){
        Gson gson = new Gson();
        String json = gson.toJson(comercioController.find(1));
        return json;
    }

    //@PathParam("id") int id
}
