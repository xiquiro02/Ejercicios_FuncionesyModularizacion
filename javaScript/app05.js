// Importamos la funcion mostrar_mensaje desde el archivo validar_numero.js ubicado en la carpeta modulos
import { mostrar_mensaje } from "../modulos/ejercicio05.js";

export const ejercicio5 = () => 
{
    // Pedimos al usuario que ingrese un numero y lo guardamos como texto
    let numero = prompt("Ingrese un numero:");

    // Convertimos el valor ingresado a numero entero usando parseInt
    numero = parseInt(numero);

    // Llamamos la funcion mostrar_mensaje pasando el numero como argumento
    mostrar_mensaje(numero);
}