package Modules.gestionComercios.modelEntities;

import java.util.List;

public class ComercioModel {
    private String descripcion;
    private String direccion;
    private String nombre;
    private List<ArticuloModel> articulos;

    public String getDescripcion() { return descripcion; }

    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public String getDireccion() { return direccion; }

    public void setDireccion(String direccion) { this.direccion = direccion; }

    public String getNombre() { return nombre; }

    public void setNombre(String nombre) { this.nombre = nombre; }

    public List<ArticuloModel> getArticulos() { return articulos; }

    public void setArticulos(List<ArticuloModel> articulos) { this.articulos = articulos; }
}
