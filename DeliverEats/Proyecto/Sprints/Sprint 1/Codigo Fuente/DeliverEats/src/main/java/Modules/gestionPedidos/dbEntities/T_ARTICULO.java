package Modules.gestionPedidos.dbEntities;

import javax.persistence.*;

@Entity
@Table(name = "T_ARTICULO", schema = "DeliveryEat", catalog = "")
public class T_ARTICULO {
    private int idArticulo;
    private int idComercio;
    private String nombre;
    private String descripcion;
    private Double precio;

    @Id
    @Column(name="id_articulo")
    public int getIdArticulo() {
        return idArticulo;
    }
    public void setIdArticulo(int idArticulo) {
        this.idArticulo = idArticulo;
    }

    @Basic
    @Column(name="id_comercio")
    public int getIdComercio() {
        return idComercio;
    }

    public void setIdComercio(int idComercio) {
        this.idComercio = idComercio;
    }

    @Basic
    @Column(name="nombre")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Basic
    @Column(name="descripcion")
    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Basic
    @Column(name="precio")
    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
}
