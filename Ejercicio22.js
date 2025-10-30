function descargarArchivo(url, callback) {
    console.log("Descargando...");
    callback(url);
}
console.log(descargarArchivo("https://ejemplo.com" , function (url) {console.log(`Descarga completa de ${url}`);}));
