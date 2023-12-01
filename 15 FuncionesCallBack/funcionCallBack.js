/**
 * Realiza una operación matemática y llama a una función de devolución de llamada.
 * @param {number} num - El número para realizar la operación.
 * @param {number} exp - El exponente para la operación.
 * @param {function} callback - La función de devolución de llamada que se llamará con el resultado y el exponente.
 */

//* Funcion flecha con parametros
function operacion(num,exp, callback) {
    let resultado = num * 2;
    //* Llamamos a la funcion callback
    callback(resultado, exp);
}

function mostrarResultado(resultado) {
    console.log(`El resultado es: ${resultado}`);
}

function exponente(numero,exponente){
    console.log(`El resultado es: ${numero ** exponente}`);
}

operacion(5,0, mostrarResultado);
operacion(5,3, exponente);

//* LLamadas asincronas con setTimeout
function miFuncionCallback() {
    console.log('Saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallback, 3000);

//* LLamadas asincronas con setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);

