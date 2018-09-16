package Modules;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/test")
public class RestHello{

    @GET
    @Path("/sayHello")
    public String doGet() {
        return "Hello World!";
    }

}
