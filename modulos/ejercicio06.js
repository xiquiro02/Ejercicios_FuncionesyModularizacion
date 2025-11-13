// Funcion que calcula el promedio de tres numeros
export function calcularPromedio(n1, n2, n3) {
    // Suma los tres valores y divide entre 3
    return (n1 + n2 + n3) / 3;
}

// Funcion que valida si el valor ingresado es un numero valido
export function esNumeroValido(n) {
    // Verifica que el tipo sea "number" y que no sea NaN
    return typeof n === "number" && !Number.isNaN(n);
}

// Funcion que determina si el promedio alcanza la linea de aprobacion
export function estadoAprobacion(promedio, linea = 70.0) {
    // Si el promedio es mayor o igual a la linea, retorna "APROBO", si no, "REPROBO"
    return promedio >= linea ? "APROBO" : "REPROBO";
}

// Funcion que genera el mensaje final con nombre, promedio y estado
export function mensajeFinalAcademico(nombre, promedio, estado) {
    // Devuelve un texto con el nombre del estudiante, el promedio con dos decimales y el resultado
    return `Estudiante: ${nombre}\nPromedio: ${promedio.toFixed(2)}\nResultado: ${estado}`;
}