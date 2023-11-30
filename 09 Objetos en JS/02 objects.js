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

console.log(persona.nombre); // Output: Angel
console.log(persona['nombre']); // Output: Angel

//TODO FOR IN

for (propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}