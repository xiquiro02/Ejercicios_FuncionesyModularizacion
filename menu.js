//Importaciones de los modulos 

import { ejer1 } from "./javaScript/app01.js";
import { ejer2 } from "./javaScript/app02.js";
import { ejer3 } from "./javaScript/app03.js";
import { ejer4 } from "./javaScript/app04.js";
import { ejer5 } from "./javaScript/app05.js";
import { ejer6 } from "./javaScript/app06.js";
import { ejer7 } from "./javaScript/app07.js";
import { ejer8 } from "./javaScript/app08.js";
import { ejer9 } from "./javaScript/app09.js";
import { ejer10 } from "./javaScript/app10.js";

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
            ejer1();
            break;

        case 2:
            ejer2();
            break;

        case 3:
            ejer3();
            break;

        case 4:
            ejer4();
            break;

        case 5:
            ejer5();
            break;
        
        case 6:
            ejer6();
            break;

        case 7:
            ejer7();
            break;

        case 8:
            ejer8();
            break;

        case 9:
            ejer9();
            break;

        case 10:
            ejer10();
            break;

        case 0:
            alert("Gracias...");
            continuar = false;
            break;
            
        default:
            alert("Opcion no valida. ingresa un numero entre 1 o 0");
    }
}