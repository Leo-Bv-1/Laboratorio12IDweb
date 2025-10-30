const componerTransformaciones = (mayusculas, agregarSigno) => {
    return texto => mayusculas(agregarSigno(texto));
}
const mayusculas = (texto) => texto.toUpperCase();
const agregarSigno = (texto) => texto + "!";
const transformar = componerTransformaciones(mayusculas,agregarSigno);
console.log(transformar("hola"));
