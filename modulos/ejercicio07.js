// Funcion que permite al usuario depositar dinero en su saldo
export function depositar(saldo) {
    // Pedimos al usuario la cantidad a depositar y la convertimos a decimal
    let deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));

    // Verificamos que el valor ingresado sea un numero valido y mayor que cero
    if (!isNaN(deposito) && deposito > 0) {
        // Sumamos el deposito al saldo actual
        saldo += deposito;

        // Mostramos mensaje de exito con el nuevo saldo
        alert(`Deposito exitoso. Saldo actual: ${saldo}`);

        // Retornamos el nuevo saldo
        return saldo;
    } else {
        // Si el valor no es valido, mostramos mensaje de error
        alert("Cantidad invalida.");
    }
}

// Funcion que permite al usuario retirar dinero del saldo
export function retirarDinero(saldo) {
    // Pedimos al usuario la cantidad a retirar y la convertimos a decimal
    let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));

    // Verificamos que el valor sea valido, mayor que cero y no supere el saldo disponible
    if (!isNaN(retiro) && retiro > 0 && retiro <= saldo) {
        // Restamos el retiro al saldo actual
        saldo -= retiro;

        // Mostramos mensaje de exito con el nuevo saldo
        alert(`Retiro exitoso. Saldo actual: ${saldo}`);

        // Retornamos el nuevo saldo
        return saldo;
    } else {
        // Si el valor no es valido o no hay suficiente saldo, mostramos mensaje de error
        alert("Cantidad invalida o saldo insuficiente.");
    }
}

// Funcion que muestra el saldo actual al usuario
export function mostrarSaldo(saldo) {
    // Mostramos el saldo con un mensaje
    alert(`Saldo actual: ${saldo}`);
}