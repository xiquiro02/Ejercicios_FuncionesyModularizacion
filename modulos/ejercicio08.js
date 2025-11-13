// Funcion que calcula el subtotal multiplicando el precio por la cantidad
export function Subtotal(precio, cantidad) {
    return cantidad * precio;
}

// Funcion que calcula el IVA (19%) sobre el total sin IVA
export function calculariva(TotalSinIva) {
    return TotalSinIva * 0.19;
}

// Funcion flecha que calcula el total sumando el subtotal y el IVA
export const Calculartotalconiva = (TotalSinIva, iva) => TotalSinIva + iva;