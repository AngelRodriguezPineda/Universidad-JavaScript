// 'use strict'
// let miPromesa = new Promise((resolve, reject) => {
//     if (false) {
//         resolve('La operación fue exitosa');
//     } else {
//         reject('Hubo un error');
//     }
// });

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// )

// miPromesa.then(
//     valor => console.log(valor)
// ).catch(
//     error => console.error(error)
// )

// let promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let numero = Math.random();
//         if (numero < 0.5) {
//             resolve(numero);
//         } else {
//             reject(numero);
//         }
//     }, 2000);
// });

// promesa.then(
//     valor => console.log(valor)
// ).catch(
//     error => console.log(error)
// );


let promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Éxito'), 2000);
});

//async indica que la función regresa una promesa
async function miFuncionConPromesa() {
    return 'Éxito async';
}


//miFuncionConPromesa().then(valor => console.log(valor));

//TODO async/await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolve => {
        resolve('Promesa con await');
    });

    console.log(await miPromesa);
}

funcionConPromesaYAwait();