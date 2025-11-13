// Importamos las funciones calcularPromedio, esNumeroValido, estadoAprobacion y mensajeFinalAcademico desde el archivo CalculoPromedio.js ubicado en la carpeta modulos
import { calcularPromedio, esNumeroValido, estadoAprobacion, mensajeFinalAcademico } from "../modulos/ejercicio06.js";

export const ejer6 = () => 
{
    // Pedimos al usuario que ingrese el nombre del estudiante
    const nombre = prompt("Nombre del estudiante:");

    // Pedimos la primera nota y la convertimos a decimal
    const not1 = parseFloat(prompt("Nota 1:"));

    // Pedimos la segunda nota y la convertimos a decimal
    const not2 = parseFloat(prompt("Nota 2:"));

    // Pedimos la tercera nota y la convertimos a decimal
    const not3 = parseFloat(prompt("Nota 3:"));

    // Validamos que el nombre no este vacio y que las tres notas sean numeros validos
    if (nombre && esNumeroValido(not1) && esNumeroValido(not2) && esNumeroValido(not3)) {

        // Calculamos el promedio usando la funcion calcularPromedio
        const prom = calcularPromedio(not1, not2, not3);

        // Determinamos si el estudiante aprobo o reprobo segun el promedio
        const estado = estadoAprobacion(prom);

        // Mostramos el mensaje final con el nombre, promedio y estado
        alert(mensajeFinalAcademico(nombre.trim(), prom, estado));

    } else {
        // Si los datos no son validos, mostramos un mensaje de error
        alert("Datos invalidos. Intenta de nuevo.");
    }
}