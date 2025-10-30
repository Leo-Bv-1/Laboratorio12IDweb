function crearSecuencia(inicio, paso) {
    let actual = inicio;
    return function() {
        const valor = actual;
        actual += paso;
        return valor; 
    };
}
const secuencia = crearSecuencia(2, 3);
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());
console.log(secuencia()); 
