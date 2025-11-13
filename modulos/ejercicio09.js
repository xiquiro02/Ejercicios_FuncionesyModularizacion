// Funcion que determina si un numero es par o impar
export function par_impar(num) {
    // Si el residuo de dividir entre 2 es cero, es par
    if (num % 2 == 0) {
        return "Par";
    } else {
        // Si no, es impar
        return "Impar";
    }
}

// Funcion que determina si un numero es positivo o negativo
export function positivo_negativo(num) {
    // Si el numero es mayor que cero, es positivo
    if (num > 0) {
        return "Positivo";
    } else {
        // Si no, es negativo (incluye cero como negativo en este caso)
        return "Negativo";
    }
}

// Funcion que verifica si un numero es primo
export function es_primo(n) {
    // Los numeros menores o iguales a 1 no son primos
    if (n <= 1) return "No es primo";

    // Recorremos desde 2 hasta n-1 para buscar divisores
    for (let i = 2; i < n; i++) {
        // Si encontramos un divisor exacto, no es primo
        if (n % i === 0) {
            return "No es primo";
        }
    }

    // Si no se encontraron divisores, el numero es primo
    return "Es primo";
}