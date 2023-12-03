console.log('Aplicación calculadora');
function sumar() {
    const forma = document.getElementById('forma');
    let operandoA = forma['num1'];
    let operandoB = forma['num2'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)) {
        resultado = 'La operación no incluye números';
    }

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

console.log(document.getElementById('forma'))