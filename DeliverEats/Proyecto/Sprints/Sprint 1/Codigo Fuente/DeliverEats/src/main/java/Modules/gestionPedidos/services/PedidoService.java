package Modules.gestionPedidos.services;

import com.google.gson.Gson;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/pedido")
public class PedidoService {
    @GET
    @Produces("application/json")
    public void getAll() {
        Gson gson = new Gson();
        //return  json;
    }

    @POST
    @Consumes("application/json")
    public void create(String json) {
        Gson gson = new Gson();

        //return franquiciaController.create(f);
    }

    @PUT
    @Path("/{id}")
    @Consumes("application/json")
    public void update(@PathParam("id") long id, String json) {
        Gson gson = new Gson();

       // if (franquiciaController.update(id, f)) return javax.ws.rs.core.Response.accepted().build();
        //return javax.ws.rs.core.Response.notModified().build();
    }

    @DELETE
    @Path("/{id}")
    public void remove(@PathParam("id") long id) {

    }
}
