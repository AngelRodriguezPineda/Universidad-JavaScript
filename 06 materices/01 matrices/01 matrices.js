// Crear una matriz de 3x3
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Acceder a un elemento de la matriz
const elemento = matriz[1][2]; // 6

// Modificar un elemento de la matriz
matriz[0][1] = 10;

// Recorrer la matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}

console.log(matriz[0][2]); 