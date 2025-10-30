function ejecutarOperacion (fn, x, y) {
    return fn(x,y);
}
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error no se puede hacer una división entre 0';
console.log(ejecutarOperacion(sumar, 5, 3)); 
console.log(ejecutarOperacion(restar, 10, 4)); 
console.log(ejecutarOperacion(multiplicar, 6, 7)); 
console.log(ejecutarOperacion(dividir, 20, 4));
console.log(ejecutarOperacion(dividir, 10, 0));