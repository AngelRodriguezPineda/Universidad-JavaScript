//* Importamos la clase Persona
class Persona{

    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this.edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    get edad(){
        return this._edad;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} 
                ${this._nombre} 
                ${this._apellido} 
                ${this._edad}`;
    }

}

//* Importamos la clase Empleado
class Empleado extends Persona{
    
    static contadorEmpleados = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }  
    toString(){
        return `super.toString()
                ${this._idEmpleado} 
                ${this._sueldo}`;
    }
}

//* Importamos la clase Cliente
class Cliente extends Persona {
    
    static contadorClientes = 0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return `super.toString()
                ${this._idCliente} 
                ${this._fechaRegistro}`;
    }

}

//* Creamos un objeto de la clase Persona
let persona1 = new Persona('Angel', 'Rodriguez', 24);
console.log(persona1.toString());

let persona2 = new Persona('Charlie', 'Rodriguez', 2);
console.log(persona2.toString());

//* Creamos un objeto de la clase Empleado
let empleado1 = new Empleado('Chompy','Rodriguez', 24, 1000);
console.log(empleado1.toString());

//* Creamos un objeto de la clase Cliente
let cliente1 = new Cliente('karla', 'Vazquez', 24, new Date());
console.log(cliente1.toString());

