function miFuncion() {
    console.log('miFuncion');
}

//* Funcion flecha, no funciona el Hoisting en las funciones flecha
const miFuncionFlecha = () => console.log('miFuncionFlecha');

//* Funcion flecha con parametros
const miFuncionFlecha2 = () => {
    console.log('miFuncionFlecha2');
}   

miFuncion();

miFuncionFlecha();


//* Funcion flecha con parametros
const sumar = (a, b) => a + b;

let resultado = sumar(5, 3);
console.log(resultado);

const saludar = () => 'Hola Mundo';
console.log(saludar());

const regresarObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresarObjeto());

const funcionConParametrosDefecto = (nombre = 'Nombre', apellido = 'apellido') => console.log(nombre, apellido);
funcionConParametrosDefecto();
funcionConParametrosDefecto('Juan', 'Lara');
const angel = () => "Hola mundo";