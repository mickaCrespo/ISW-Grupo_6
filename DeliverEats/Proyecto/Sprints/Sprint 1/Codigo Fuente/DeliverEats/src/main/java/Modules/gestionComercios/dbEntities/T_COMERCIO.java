package Modules.gestionComercios.dbEntities;

import javax.persistence.*;


@Entity
@Table(name = "T_ARTICULO", schema = "DeliveryEat", catalog = "")
public class T_COMERCIO {
    private int idComercio;
    private String nombre;
    private String descripcion;
    private String direccion;

    @Id
    @Column(name="id_comercio")
    public int getIdComercio() { return idComercio; }

    public void setIdComercio(int idComercio) { this.idComercio = idComercio; }

    @Basic
    @Column(name="nombre")
    public String getNombre() { return nombre; }

    public void setNombre(String nombre) { this.nombre = nombre; }

    @Basic
    @Column(name="descripcion")
    public String getDescripcion() { return descripcion; }

    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    @Basic
    @Column(name="direccion")
    public String getDireccion() { return direccion; }

    public void setDireccion(String direccion) { this.direccion = direccion; }
}
