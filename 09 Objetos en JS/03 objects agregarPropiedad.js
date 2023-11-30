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

persona.tel = '477 123 4567';

console.log(persona);


delete persona.tel;
console.log(persona);
