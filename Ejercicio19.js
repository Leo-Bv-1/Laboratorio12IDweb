function mostrarDatos (nombre,edad,...hobbies) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
}
mostrarDatos('Leonardo', 25, 'jugar', 'viajar', 'leer');