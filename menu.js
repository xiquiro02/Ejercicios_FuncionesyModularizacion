//Importaciones de los modulos 

import { ejercicio1 } from "./javaScript/app01.js";
import { ejercicio2 } from "./javaScript/app02.js";
import { ejercicio3 } from "./javaScript/app03.js";
import { ejercicio4 } from "./javaScript/app04.js";
import { ejercicio5 } from "./javaScript/app05.js";
import { ejercicio6 } from "./javaScript/app06.js";
import { ejercicio7 } from "./javaScript/app07.js";
import { ejercicio8 } from "./javaScript/app08.js";
import { ejercicio9 } from "./javaScript/app09.js";
import { ejercicio10 } from "./javaScript/app10.js";

const continuar = true

while (continuar){
    let opcion = Number(prompt(`Digite la opcion del ejercicio que deseas: 
        1. Ejercicio 1
        2. Ejercicio 2
        3. Ejercicio 3
        4. Ejercicio 4
        5. Ejercicio 5
        6. Ejercicio 6
        7. Ejercicio 7
        8. Ejercicio 8
        9. Ejercicio 9
        10. Ejercicio 10
        0. Salir`));

    switch (opcion) {
        case 1:
            ejercicio1();
            break;

        case 2:
            ejercicio2();
            break;

        case 3:
            ejercicio3();
            break;

        case 4:
            ejercicio4();
            break;

        case 5:
            ejercicio5();
            break;
        
        case 6:
            ejercicio6();
            break;

        case 7:
            ejercicio7();
            break;

        case 8:
            ejercicio8();
            break;

        case 9:
            ejercicio9();
            break;

        case 10:
            ejercicio10();
            break;

        case 0:
            alert("Gracias...");
            continuar = false;
            break;
            
        default:
            alert("Opcion no valida. ingresa un numero entre 1 o 0");
    }
}