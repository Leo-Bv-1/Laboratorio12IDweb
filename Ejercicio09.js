const calcularDescuento = function(precio,porcentaje) {
    return precio*(100-porcentaje)/100;
}

console.log(calcularDescuento(100,30));