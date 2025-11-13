// Funcion flecha que valida si el valor ingresado es un numero
const validar_numero = (numero) => {
    if (isNaN(numero)) {
        // Si no es un numero, retorna false
        return false;
    }
    // Si es un numero valido, retorna true
    return true;
}

// Funcion flecha que verifica si un numero es primo
const validar_divisores = (numero) => {
    let bandera = true; // Asumimos que el numero es primo

    // Validamos que el valor ingresado sea un numero
    if (validar_numero(numero)) {
        // Recorremos desde 2 hasta la raiz cuadrada del numero
        for (let i = 2; i * i <= numero; i++) {
            // Si el numero tiene un divisor distinto de 1 y de si mismo
            if (numero % i === 0) {
                bandera = false; // No es primo
                break; // Terminamos el ciclo
            }
        }
        return bandera; // Retornamos true o false segun el resultado
    } else {
        // Si no es un numero valido, mostramos un mensaje
        alert(`No es un numero`);
    }
}

// Funcion exportada que muestra si el numero es primo o no
export const mostrar_mensaje = (numero) => {
    if (validar_divisores(numero)) {
        alert(`El numero ${numero} es primo`);
    } else {
        alert(`El numero ${numero} no es primo`);
    }
}