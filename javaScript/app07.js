// Importamos las funciones depositar, retirarDinero y mostrarSaldo desde el archivo depositar_retirar_saldo.js ubicado en la carpeta modulos
import { depositar, retirarDinero, mostrarSaldo } from "../modulos/ejercicio07.js";

export const ejercicio7 = () => 
{
    // Inicializamos la variable saldo en 0
    let saldo = 0;

    // Inicializamos la variable operacion como cadena vacia
    let operacion = "";

    // Usamos un ciclo while que se repite hasta que el usuario seleccione la opcion '4' (salir)
    while (operacion !== '4') 
    {

        // Mostramos el menu de opciones y guardamos la seleccion del usuario
        operacion = prompt("Seleccione una operacion: \n1. Depositar dinero \n2. Retirar dinero \n3. Consultar saldo \n4. Salir");

        // Usamos switch para ejecutar la accion segun la opcion seleccionada
            switch (operacion) 
            {

                // Opcion 1: Depositar dinero
                case '1':
                    // Llamamos la funcion depositar y actualizamos el saldo
                    saldo = depositar(saldo);
                    break;

                // Opcion 2: Retirar dinero
                case '2':
                    // Llamamos la funcion retirarDinero y actualizamos el saldo
                    saldo = retirarDinero(saldo);
                    break;

                // Opcion 3: Consultar saldo
                case '3':
                    // Llamamos la funcion mostrarSaldo para ver el saldo actual
                    mostrarSaldo(saldo);
                    break;

                // Opcion 4: Salir del sistema
                case '4':
                    // Mostramos mensaje de despedida
                    alert("Gracias por usar el sistema.");
                    break;

                // Cualquier otra opcion no valida
                default:
                    alert("Operacion no valida.");
        
            }
    }
}