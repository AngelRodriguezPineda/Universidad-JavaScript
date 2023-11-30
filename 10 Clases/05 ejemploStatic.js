class Persona{
    
    static contadorPersona = 0; // Atributo de nuestra clase

    static get MAX_OBJ() {
        return 5;
    }
    static set MAX_OBJ(valor) {
        console.log('No se puede reasignar el valor de MAX_OBJ');
    }
    
    constructor(nombre, apellido) {
        
        if (Persona.contadorPersona < Persona.MAX_OBJ) {
            this._nombre = nombre;
            this._apellido = apellido;
            this.idPersona = ++Persona.contadorPersona;
        } else {
            console.log('Se han superado el máximo de objetos permitidos');
        }
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
        return this.idPersona + ': ' +this._nombre + ' ' + this._apellido;
    }
    toString() {
        return this.nombreCompleto();
    }
    static saludar() {
        console.log('Saludos desde método static');
    }
    static saludar2(persona) {
        console.log(persona.nombre);
    }
}

let persona1 = new Persona('Charlie','Rodriguez');
console.log(persona1.toString()); // Output: 1: Charlie Rodriguez

let persona2 = new Persona('Angel','Rodriguez');
console.log(persona2.nombreCompleto());  // Output: 2 Charlie Rodriguez

let empleado1 = new Persona('Karla','Gomez');
console.log(empleado1.toString()); // Output: 3: Karla Gomez

let empleado2 = new Persona('Laura','Quintero');
console.log(empleado2.toString()); // Output: 4: Laura Quintero

let empleado3 = new Persona('Juan','Carlos');
console.log(empleado3.toString()); // Output: 5: Juan Carlos

let persona3 = new Persona('Marta','Ramirez'); // Output: Se han superado el máximo de objetos permitidos

console.log(persona3.toString()); // Output: undefined: undefined

console.log(Persona.contadorPersona); // Output: 5

console.log(Persona.MAX_OBJ); // Output: 5
Persona.MAX_OBJ = 10; // No se puede modificar porque es una constante
console.log(Persona.MAX_OBJ); // Output: 5
