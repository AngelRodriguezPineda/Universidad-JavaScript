'use strict'

try{
    let x = 10;
    //miFuncion();

    throw 'mi error';
}
catch(error){
    console.log(error);
}
finally{
    console.log('termina la revision de errores');
}

console.log('continuamos...');
