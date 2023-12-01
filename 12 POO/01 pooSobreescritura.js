class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
    } else if (tipo instanceof Empleado){ 
        console.log("Es un objeto de tipo Empleado");
    } else if (tipo instanceof Object){
        console.log("Es un objeto de tipo Object");
    }
}


let gerente1 = new Gerente("Angel", 5000, "Sistemas");
let empleado1 = new Empleado("Charlie", 3000);	

imprimir(empleado1);
imprimir(gerente1);

