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
};

persona.edad = 25;
console.log(persona.edad); // Output: 25

persona.nombre = 'Angel Gabriel';
console.log(persona.nombre); // Output: Angel Gabriel
console.log(persona.domicilio); 


console.log(persona.nombreCompleto()); // Output: Angel Gabriel Rodriguez
console.log(persona.nombreMail()); // Output: undefined undefined


// let persona2 = { new: Object() };

persona2.nombre = 'Angel';
persona2.apellido = 'Rodriguez';
persona2.email = 'angel@twochange.ong';
persona2.edad = 24;
persona2.domicilio = 'Gildardo Magaña 448';
persona2.nombreCompleto = function() {
    return this.nombre + ' ' + this.apellido;
};
persona2.nombreMail = () => {
    return persona.nombre + ' | ' + persona.email;
};

console.log(persona.nombre); // Output: Angel Gabriel
console.log(persona.domicilio); 
console.log(persona.nombreCompleto()); // Output: Angel Gabriel Rodriguez
console.log(persona.nombreMail()); // Output: undefined undefined