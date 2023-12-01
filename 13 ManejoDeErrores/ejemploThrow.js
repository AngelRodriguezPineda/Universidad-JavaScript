'use strict'
let resultado = '-5';

try{
    if(isNaN(resultado)) throw 'No es un numero';
    else if(resultado === '') throw 'Es cadena vacia';
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado < 0) throw 'Valor negativo';  
}
catch(error){
    console.log(error);
    //console.error(error.name);
    //console.error(error.message);
}
finally{
    console.info('Termina revision de errores');
}
