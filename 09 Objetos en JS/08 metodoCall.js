//TODO: Constructor Objects de tipo Persona
let persona1 = {
    nombre: 'Angel',
    apellido: 'Rodriguez',
    nombreCompleto: function(titulo, tel) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}
let persona2 = {
    nombre: 'Karla',
    apellido: 'Vazquez',
}

//TODO Uso de apply para usar el metodo nombreCompleto con datos de persona2
console.log(persona1.nombreCompleto("Ing",4521292116)); // Output: Angel Rodriguez

let arreglo = ['Ing', '4432135809'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));


//TODO Uso de Call para usar el metodo nombreCompleto con datos de persona2
console.log(persona1.nombreCompleto("Ing",4521292116)); // Output: Angel Rodriguez
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '4432135809')); // Output: Karla Vazquez


