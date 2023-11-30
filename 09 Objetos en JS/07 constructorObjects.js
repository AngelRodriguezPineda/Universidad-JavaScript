//TODO: Constructor Objects de tipo Persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}
Persona.prototype.tel = '44332211';

let padre = new Persona('Angel','Rodriguez','angel@twochange.ong');
console.log(padre);
console.log(padre.tel);
padre.tel = '99887766';
console.log(padre.tel);



let madre = new Persona('Karla','Vazquez','info@karlasoy.com');
console.log(madre);

let hijoMexicano = new Persona('Charlie','Rodriguez','charlie@twochange.ong');
console.log(hijoMexicano);

padre.edad = 24;
console.log(padre);

console.log(padre.nombreCompleto());

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};

let miFecha = new Date();

let miExpresionRegular = new RegExp();

let miError = new Error();
