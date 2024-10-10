/*Sea la información de un artículo: 
nombre, cantidad y precio base. Se 
espera que los artículos tengan un 
descuento, pero eso dependerá de 
cada departamento. 
export default class Cl_articulo{ 
 constructor(nombre, cantidad, precioBase){ 
 this.nombre=nombre 
 this.cantidad=cantidad 
 this.precioBase=precioBase 
 } 
 Agregue acá los métodos de acceso necesarios 
 descuento(){ 
 return 0 
 } 
 aPagar(){ 
 return this.cantidad * this.precioBase - this.descuento() 
 } 
} 
El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para 
edad de 1 año. 
Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y 
el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva 
clase sólo amerita edad y descuento(). 
Realice un programa que lea los datos de un juguete y reporte el monto a pagar. 
Ejemplos de la corrida: 
Nombre del juguete: carrito 
Cantidad: 2 
Precio base: $10 
Edad recomendada: 2 
Monto a pagar por el carrito: $20.00 
Nombre del juguete: peluche 
Cantidad: 3 
Precio base: $20 
Edad recomendada: 1 
Monto a pagar por el peluche: $54.00
*/
import Cl_Juguete from "./Cl_Juguete.js";

let Juguete = new Cl_Juguete("carrito", 2, 10, 2);
let Juguete2 = new Cl_Juguete("peluche", 3, 20, 1);

let salida = document.getElementById("1");
salida.innerHTML = `
<br> Nombre del juguete: ${Juguete.nombre} <br>
<br> Precio Base: ${Juguete.precioBase}$ <br>
<br> Edad recomendada: ${Juguete.edad} <br>
<br> Monto a pagar por el ${Juguete.nombre}: ${Juguete.aPagar()}$<br>
<br><br>
<br> Nombre del juguete: ${Juguete2.nombre} <br>
<br> Precio Base: ${Juguete2.precioBase}$<br>
<br> Edad recomendada: ${Juguete2.edad} <br>
<br> Monto a pagar por el ${Juguete2.nombre}: ${Juguete2.aPagar()}$<br>
`