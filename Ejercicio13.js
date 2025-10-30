function procesarTexto (texto) {
    function limpiarEspacios (cadena) {
        cadena.replace(" ","")
    }
    function contarPalabras(cadena) {
        if (cadena === "") return 0;
        return cadena.split(" ").length;
    }
    const textoLimpio = limpiarEspacios(texto);
    const totalPalabras = contarPalabras(texto);
    return {textoLimpio, totalPalabras};
}