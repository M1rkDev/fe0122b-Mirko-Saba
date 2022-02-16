
function pensione(anni,eta)
{
    return anni - eta;
    
}
console.log(pensione(65,30))


var numero1 = 21;
var numero2 = 20;

saluti = () =>  "andrò in pensione tra " + (numero1 + numero2) +  " anni";

//alert(saluti());

function bellaPeTe () {
    var num = 4;

    function somma()
    {
        console.log(num + numero1 + numero2);
    }
    return somma ();
}

bellaPeTe();

var nome = "mirko";
var nome1 = "roberto";

nome1 == nome; //false
console.log(nome1 == nome);

nome == nome; //true
nome === nome; //true
nome1 != nome; //false
console.log(nome != nome);

numero1 > numero2; //true
numero1 < numero2; //false
numero1 > (numero2 + 3); //false
console.log(numero1 > (numero2 + 3));

numero1 = (numero2 + 1); //true
console.log(numero1 = (numero2 + 1));