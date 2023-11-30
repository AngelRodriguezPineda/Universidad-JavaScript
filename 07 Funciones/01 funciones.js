// Función sin parámetros ni valor de retorno
function saludar() {
  console.log("¡Hola!");
}

// Función con parámetros
function sumar(a, b) {
  return a + b;
}

// Función con valor de retorno
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

// Función anónima asignada a una variable
var multiplicar = function(a, b) {
    let resultado = console.log( a * b);
  return resultado;
};

// Función flecha (arrow function)
var restar = (a, b) => a - b;

saludar();
multiplicar(2, 3);