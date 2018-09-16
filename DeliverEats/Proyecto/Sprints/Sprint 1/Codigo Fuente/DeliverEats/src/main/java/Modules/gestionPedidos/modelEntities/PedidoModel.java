package Modules.gestionPedidos.modelEntities;

import java.util.Date;
import java.util.List;

public class PedidoModel {
    private Float conCuantoPaga;
    private String domicilio;
    private Date entregaDeseada;
    private Date fechaHora;
    private String FormaDePago;
    private Integer numeroPedido;
    private List<DetallePedidoModel> detalles;

}
