// Importamos la funcion ContarHasta desde el archivo contador.js ubicado en la carpeta modulos
import { ContarHasta } from "../modulos/ejercicio03.js";

export const ejercicio3 = () => 
{
    // Pedimos al usuario que ingrese un numero y lo convertimos a entero con parseInt
    let n = parseInt(prompt("Ingrese el numero: "));

    // Llamamos la funcion ContarHasta pasando el numero ingresado como argumento
    ContarHasta(n);
}