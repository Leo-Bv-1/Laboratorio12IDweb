function acumulador (valorInicial) {
    let valor = valorInicial;
    return (sum) => {
        valor+=sum 
        return valor;
    }
}
const miAcumulador = acumulador(10); 
console.log(miAcumulador(5));
console.log(miAcumulador(3));
console.log(miAcumulador(10));