// Importamos las funciones suma, resta, multiplicacion, division, potencia y raizCuadrada desde el archivo Calculadora.js ubicado en la carpeta modulos
import { suma, resta, multiplicacion, division, potencia, raizCuadrada } from "../modulos/ejercicio10";

export const ejercicio10 = () => 
{
    // Inicializamos la variable continuar en true para controlar el ciclo
    let continuar = true;

    // Usamos un ciclo while que se repite mientras continuar sea true
    while (continuar) {

        // Mostramos el menu de opciones y convertimos la seleccion del usuario a numero
        let option = Number(prompt(`Digite la opcion de la operacion que deseas realizar: 
            1. Suma.
            2. Resta.
            3. Multiplicacion.
            4. Division.
            5. Potenciacion.
            6. Raiz Cuadrada.
            0. Salir.`));
        // Si el usuario elige 0, se termina el ciclo
        if (option === 0) 
        {
            console.log("¡Hasta luego!");
            continuar = false;
        // Si elige una opcion valida entre 1 y 6
        } 
        else if (option >= 1 && option <= 6) 
        {
                let resultado;
                let num1, num2;

                // Si la opcion es 6 (raiz cuadrada), solo se necesita un numero
                if (option === 6) 
                {
                    num1 = Number(prompt("Ingresa el numero para calcular la raiz cuadrada:"));

                    // CORRECCION: aqui deberia ser resultado = raizCuadrada(num1);
                    resultado = raizCuadrada(num1);
                } 
        else 
        {
                // Para las demas operaciones se piden dos numeros
                num1 = Number(prompt("Ingresa el primer numero:"));
                num2 = Number(prompt("Ingresa el segundo numero:"));

                // Usamos switch para ejecutar la operacion correspondiente
                switch (option) 
                {
                    case 1:
                        resultado = suma(num1, num2);
                        break;
                    case 2:
                        resultado = resta(num1, num2);
                        break;
                    case 3:
                        resultado = multiplicacion(num1, num2);
                        break;
                    case 4:
                        resultado = division(num1, num2);
                        break;
                    case 5:
                        resultado = potencia(num1, num2);
                        break;
                }
        }
            // Mostramos el resultado en consola
            console.log(`Resultado ${resultado}`);
        } 
        else 
        {
            // Si la opcion no es valida, mostramos un mensaje de error
            console.log("Opcion invalida. Intenta de nuevo.");
        }
    }
}