class Persona {
    constructor(nombre, apellido, email) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this.nombreCompleto = function() {
            return this._nombre + ' ' + this._apellido;
        }
    }
     get getNombre() {
         return this._nombre;
     } 
     set setNombre(nombre) {
         this._nombre = nombre;
     } 
}

let angel = new Persona('Angel', 'Rodriguez', 'info@soyangel.es');
console.log(angel);
console.log(angel.nombreCompleto())

let karla = new Persona('Karla', 'Vazquez', 'info@karlasoy.com');
console.log(karla);
console.log(karla.nombreCompleto())

console.log(angel.getNombre);

angel.setNombre = 'Jose';
console.log(angel.nombreCompleto())
console.log(angel.getNombre);
console.log(angel._nombre);
 


