// Importamos la funcion Calcularpromedio desde el archivo calcularpromedio.js ubicado en la carpeta modulos
import { Calcularpromedio } from "../modulos/ejercicio02.js";

export const ejercicio2 = () => 
{
    // Pedimos al usuario que ingrese la primera nota y la convertimos a numero decimal
    let not1 = parseFloat(prompt("Ingrese la nota 1: "));

    // Pedimos la segunda nota y la convertimos a numero decimal
    let not2 = parseFloat(prompt("Ingrese la nota 2: "));

    // Pedimos la tercera nota y la convertimos a numero decimal
    let not3 = parseFloat(prompt("Ingrese la nota 3: "));

    // Llamamos la funcion Calcularpromedio con las tres notas y mostramos el resultado con alert
    alert(Calcularpromedio(not1, not2, not3));
    
}