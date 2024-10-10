import Cl_Articulo from "./Cl_Articulo.js";
export default class Cl_Juguete extends Cl_Articulo{
    constructor(nombre, cantidad,precioBase,edad){
        super(nombre,cantidad,precioBase);
        this.edad=edad;
    }
    descuento(){
        if(this.edad == 1)
            return this.precioBase *this.cantidad * 0.1;
        else
            return 0;
    }
    aPagar(){
        return this.cantidad * this.precioBase - this.descuento();
    }
}