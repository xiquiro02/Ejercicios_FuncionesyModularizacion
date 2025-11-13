// Funcion que calcula el subtotal: cantidad × precio
export function CalcularSubtotal(cantidad , precio)
{
    return cantidad * precio;
}

// Funcion que calcula el IVA (19%) sobre el subtotal
export function CalcularIva(Subtotal)
{
    return Subtotal * 0.19;
}

// Funcion que calcula el total a pagar: subtotal + IVA
export function CalcularTotal(Subtotal,iva)
{
    return Subtotal + iva;
}