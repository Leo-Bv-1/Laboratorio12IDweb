function filtrarArreglo (arr, callback) {
    let filtrados=[];
    for (let elemento of arr) {
        if (callback(elemento)){
            filtrados.push(elemento);
        }
    }
    return filtrados;
}
const numeros = [1, 2, 3, 4, 5, 6];
function esPar(n) {
    return n % 2 === 0;
}
const pares = filtrarArreglo(numeros, esPar);
console.log(pares);