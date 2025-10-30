function media (...numeros) {
    let suma=0;
    for (n of numeros){
        suma+=n;
    }
    return suma/numeros.length;
}
console.log(media(1,2,3,4,5,6,7,8,9,10,11));