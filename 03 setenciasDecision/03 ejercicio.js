// Ejemplo 1
let edad = 18;
let mensaje = edad >= 18 ? `Es mayor de edad, tiene ${edad} años` : "Eres menor de edad";
console.log(mensaje);

//Ejemplo 2
let diaSemana = 5;
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

if (diaSemana >= 1 && diaSemana <= 7) {
    console.log (dias[diaSemana - 1]);
} else {
    console.log("No es un dia de la semana");
}