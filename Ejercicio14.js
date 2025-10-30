function operacionesMatematicas () {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => b !== 0 ? a / b : 'Error no se puede hacer una división entre 0';

    return (operacion, a, b) => {
        switch (operacion) {
            case 'sumar': return sumar(a, b);
            case 'restar': return restar(a, b);
            case 'multiplicar': return multiplicar(a, b);
            case 'dividir': return dividir(a, b);
            default: return 'Operación no válida';
        }
    };
}
const operar=operacionesMatematicas();
console.log(operar('sumar', 5, 3));
console.log(operar('dividir', 10, 0)); 
console.log(operar('restar', 10, 4));
console.log(operar('multiplicar', 3, 7));