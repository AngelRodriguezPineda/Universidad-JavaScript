class Persona{
    
    static contadorObjetosPersona = 0; // Atributo de nuestra clase
    
    email = 'Valor default email'; // Atributo de nuestros objetos

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa contador: ' + Persona.contadorObjetosPersona);
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
    // Sobre escritura
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Charlie','Rodriguez');
let empleado1 = new Empleado('Angel','Rodriguez','Sistemas');
//persona1.saludar(); //! No funciona las funciones en moto static desde una instancia

Persona.saludar(); // Output: Saludos desde método static

Persona.saludar2(persona1); // Output: Charlie Rodriguez

Empleado.saludar(); // Output: Saludos desde método static

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email = 'info@twochange.ong'); // Output: info@twochange
console.log(persona1);
console.log(empleado1);