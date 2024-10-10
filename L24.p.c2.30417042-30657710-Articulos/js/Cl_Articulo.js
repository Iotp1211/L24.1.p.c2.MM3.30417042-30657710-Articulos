export default class Cl_Articulo{
    constructor(nombre, cantidad, precioBase){
        this.nombre=nombre
        this.cantidad=cantidad
        this.precioBase=precioBase
    }
    descuento(){
        return 0
    }
    aPagar(){
        return this.cantidad * this.precioBase - this.descuento()
    }
}