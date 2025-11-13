// Importamos las funciones Subtotal, calculariva y Calculartotalconiva desde el archivo producto.js ubicado en la carpeta modulos
import { Subtotal, calculariva, Calculartotalconiva } from "../modulos/ejercicio08.js";

export const ejer8 = () => 
{
    // Pedimos al usuario el nombre del primer producto
    let nombre1 = prompt("Ingrese el nombre: ");
    // Pedimos el precio del primer producto y lo convertimos a decimal
    let precio1 = parseFloat(prompt("Ingrese el precio: "));
    // Pedimos la cantidad del primer producto y la convertimos a entero
    let cantidad1 = parseInt(prompt("Ingrese la cantidad: "));

    // Repetimos el mismo proceso para el segundo producto
    let nombre2 = prompt("Ingrese el nombre: ");
    let precio2 = parseFloat(prompt("Ingrese el precio: "));
    let cantidad2 = parseInt(prompt("Ingrese la cantidad: "));

    // Repetimos el mismo proceso para el tercer producto
    let nombre3 = prompt("Ingrese el nombre: ");
    let precio3 = parseFloat(prompt("Ingrese el precio: "));
    let cantidad3 = parseInt(prompt("Ingrese la cantidad: "));

    // Calculamos el subtotal de cada producto usando la funcion Subtotal
    let Subtotal1 = Subtotal(precio1, cantidad1);
    let Subtotal2 = Subtotal(precio2, cantidad2);
    let Subtotal3 = Subtotal(precio3, cantidad3);

    // Sumamos los tres subtotales para obtener el total sin IVA
    let TotalSinIva = Subtotal1 + Subtotal2 + Subtotal3;

    // Calculamos el IVA (19%) sobre el total sin IVA
    let iva = calculariva(TotalSinIva);

    // Calculamos el total final sumando el total sin IVA y el IVA
    let Totalconiva = Calculartotalconiva(TotalSinIva, iva);

    // Mostramos los resultados al usuario usando alert
    alert(`total sin iva ${TotalSinIva} iva: ${iva} Total a pagar ${Totalconiva}`);
}