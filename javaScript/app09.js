// Importamos las funciones par_impar, positivo_negativo y es_primo desde el archivo par_impar_postivo_negativo_primo.js ubicado en la carpeta modulos
import { par_impar, positivo_negativo, es_primo } from "../modulos/ejercicio09.js";

export const ejer9 = () => 
{
    // Pedimos al usuario que digite un numero y lo convertimos a tipo numerico con Number()
    let num = Number(prompt("Digite su numero:"));

    // Mostramos en consola si el numero es par o impar
    console.log(par_impar(num));

    // Mostramos en consola si el numero es positivo, negativo o cero
    console.log(positivo_negativo(num));

    // Mostramos en consola si el numero es primo o no
    console.log(es_primo(num));
}