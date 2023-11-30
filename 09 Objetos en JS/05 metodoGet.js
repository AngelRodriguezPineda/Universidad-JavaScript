let persona = {
    nombre: 'Angel',
    apellido: 'Rodriguez',
    email: 'angel@twochange.ong',
    edad: 24,
    domicilio: 'Gildardo Magaña 448',
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    },
    nombreMail: () => {
        return persona.nombre + ' | ' + persona.email;
    },
    get nombreApellido() {
        return this.nombre + ' ' + this.apellido;
    }
};

console.log(persona.nombreCompleto()); // Output: Angel Gabriel Rodriguez
console.log(persona.nombreMail()); 

console.log(persona.nombreApellido); // Output: Angel Rodriguez
