function prendiDato(elemento)
{
    let display = document.getElementById('display');
    let numero = elemento.id;
    let valore = display.value;

    display.value += numero;
}


function reset() {
    document.getElementById('display').value = '';
}

function totale () {
    let display = document.getElementById('display')
    display.value = eval(display.value)
}