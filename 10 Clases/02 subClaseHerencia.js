class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    } 
    set nombre(nombre) {
        this._nombre = nombre;
    } 
    get apellido() {
        return this._apellido;
    } 
    set apellido(apellido) {
        this._apellido = apellido;
    } 
    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona {
    constructor(nombre,apellido,departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    //TODO Sobre escritura
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let angel = new Persona('Angel', 'Rodriguez', 'info@soyangel.es');
console.log(angel);

let empreado1 = new Empleado('Charlie','Rodriguez','Sistemas');
console.log(empreado1);
console.log(empreado1.nombreCompleto());


console.log(empreado1.departamento);
console.log(empreado1.nombre);
console.log(empreado1.apellido);

//* Concepto de sobre escritura */
console.log(angel.nombreCompleto()); // Output: Angel Rodriguez
console.log(empreado1.nombreCompleto()); // Output: Charlie Rodriguez, Sistemas

