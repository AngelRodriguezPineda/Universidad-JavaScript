"use strict"

//! x = 10; // ReferenceError: x is not defined
let x = 10; 
console.log(x);

miFuncion(); //! No se puede llamar a una funcion antes de declararla

function miFuncion(){
    "use strict"
    y = 15; //! ReferenceError: y is not defined
    console.log(y);
}