let persona = {
    nombre: 'Angel',
    apellido: 'Rodriguez',
    email: 'angel@twochange.ong',
    edad: 24,
    domicilio: 'Gildardo Magaña 448',
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
};

console.log(persona.lang); // Output: ES
persona.lang = 'en';
console.log(persona.idioma); // Output: EN

console.log(persona.lang); // Output: EN

console.log(persona.idioma); // Output: EN
