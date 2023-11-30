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


//* Concatenar propiedades
console.log(persona.nombre + ' ' + persona.apellido);

//* Concatenar propiedades con for in
for (propiedad in persona) {
    console.log(persona[propiedad]);
}

//* Concatenar propiedades con for in y typeof
for (propiedad in persona) {
    if (typeof persona[propiedad] == 'string') {
        console.log(persona[propiedad]);
    }
}

//@Object.values
let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);