// Variables de ejemplo
let edad = 24;
let tieneLicencia = false;

// Sentencia if con else if
if (edad >= 18) {
    if (tieneLicencia) {
        console.log("Puedes conducir legalmente");
    } else { 
        console.log("No puedes conducir sin licencia");
    }
} else if (edad >= 16) {
    console.log("Eres menor de edad, pero puedes conducir con un adulto");
} else {
    console.log("Eres menor de edad, no puedes conducir");
}
 