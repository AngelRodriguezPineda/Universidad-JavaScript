// Funciones incorporadas de los javascript

let cadena = "Hola Mundo";
cadena.length; // 10
cadena.toUpperCase(); // "HOLA MUNDO"
cadena.toLowerCase(); // "hola mundo"
cadena.indexOf("o"); // 1
cadena.lastIndexOf("o"); // 9
cadena.includes("Mundo"); // true
cadena.startsWith("Hola"); // true
cadena.endsWith("Mundo"); // true
cadena.substring(3); // "a Mundo"
cadena.substring(3, 7); // "a Mu"
cadena.slice(3); // "a Mundo"
cadena.slice(3, 7); // "a Mu"
cadena.split(" "); // ["Hola", "Mundo"]
cadena.split(" ")[0]; // "Hola"
cadena.split(" ")[1]; // "Mundo"
cadena.split("")[0]; // "H"
cadena.split("")[1]; // "o"
cadena.split("")[2]; // "l"
cadena.split("")[3]; // "a"

cadena = cadena.split("");
console.log(typeof(cadena)); // object
cadena[1] = cadena[1].toUpperCase();
cadena = cadena.join("");

console.log(cadena);
console.log(typeof(cadena)); // string

console.log(cadena.replace("Mundo", "Youtube")); // "Hola Youtube"
console.log(cadena.replace("o", "a")); // "Hola Munda"

