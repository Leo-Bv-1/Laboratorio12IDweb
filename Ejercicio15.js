function crearContador (inicial) {
    let cuenta = inicial;
    function incrementar () {
        cuenta ++;
        return cuenta;
    }
    function resetear () {
        cuenta=inicial;
        return cuenta;
    }
    return (accion) => {
        switch (accion) {
            case 'incrementar': return incrementar();
            case 'resetear': return resetear();
            default: return undefined;
        }
    };
}
const contador = crearContador(5);
console.log(contador('incrementar'));
console.log(contador('resetear'));