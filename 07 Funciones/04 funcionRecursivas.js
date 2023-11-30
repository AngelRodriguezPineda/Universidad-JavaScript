

function contarHasta(numero) {
  if (numero <= 0) {
    console.log("¡Terminado!");
  } else {
    console.log(numero);
    contarHasta(numero - 1);
  }
}

contarHasta(5);
