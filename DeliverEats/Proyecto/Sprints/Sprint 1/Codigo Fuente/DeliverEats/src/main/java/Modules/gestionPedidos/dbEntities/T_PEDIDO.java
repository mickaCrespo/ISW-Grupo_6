package Modules.gestionPedidos.dbEntities;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "T_PEDIDO", schema = "DeliveryEat", catalog = "")
public class T_PEDIDO {
    private int numero_pedido;
    private Timestamp fecha_hora;
    private String domicilio;
    private String entrega_deseada;
    private String forma_pago;

    @Id
    @Column(name = "numero_pedido")
    public int getNumero_pedido() { return numero_pedido; }

    public void setNumero_pedido(int numero_pedido) { this.numero_pedido = numero_pedido; }


    @Basic
    @Column(name = "fecha_hora")
    public Timestamp getFecha_hora() { return fecha_hora; }

    public void setFecha_hora(Timestamp fecha_hora) { this.fecha_hora = fecha_hora; }

    @Basic
    @Column(name = "domicilio")
    public String getDomicilio() { return domicilio; }

    public void setDomicilio(String domicilio) { this.domicilio = domicilio; }

    @Basic
    @Column(name = "entrega_deseada")
    public String getEntrega_deseada() { return entrega_deseada; }

    public void setEntrega_deseada(String entrega_deseada) { this.entrega_deseada = entrega_deseada; }

    @Basic
    @Column(name = "forma_pago")
    public String getForma_pago() { return forma_pago; }

    public void setForma_pago(String forma_pago) { this.forma_pago = forma_pago; }
}
