// Importamos las funciones CalcularSubtotal, CalcularIva y CalcularTotal desde el archivo valortotal.js ubicado en la carpeta modulos
import { CalcularSubtotal, CalcularIva, CalcularTotal } from "../modulos/ejercicio04.js";

export const ejercicio4 = () =>
{
    // Pedimos al usuario que ingrese la cantidad de productos y convertimos el valor a entero
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));

    // Pedimos al usuario que ingrese el precio del producto y convertimos el valor a decimal
    let precio = parseFloat(prompt("Ingrese el precio del producto: "));

    // Calculamos el subtotal multiplicando cantidad por precio
    let Subtotal = CalcularSubtotal(cantidad, precio);

    // Calculamos el IVA (19%) sobre el subtotal
    let iva = CalcularIva(Subtotal);

    // Calculamos el total sumando el subtotal y el IVA
    let total = CalcularTotal(Subtotal, iva);

    // Mostramos los resultados finales al usuario usando alert
    alert(`subtotal: ${Subtotal} iva(19%): ${iva} total a pagar: ${total}`);

    // Llamadas adicionales a las funciones (no tienen efecto visible porque no se usan los retornos)
    CalcularSubtotal(cantidad, precio);
    CalcularIva(Subtotal);
    CalcularTotal(Subtotal, iva);
}