let presentazione = "ciao a tutti mi chiamo mirko e sono un studente di del corso epicode, questo corso mi piace molto!";

console.log(presentazione);

console.log(presentazione.toUpperCase()); /* imposta il maiuscolo alla stringa */
console.log(presentazione.toLowerCase()); /*imposta il miniscolo */

let prima = (presentazione.slice(7, 12));
console.log(prima);

let seconda = (presentazione.slice(-48, -30));
console.log(seconda);

console.log(prima + seconda);

var studenti = [
    "mirko",
    "roberto",
    "federico",
    "nicolo",
    "simone"
];

console.log(studenti);
console.log(studenti[2]);
console.log(studenti.length);

var alunno = {
    matricola: "2",
    nome: "roberto",
    corso: "frontEnd"

};

console.log(alunno);

var numeri = [
    2,
    3,
    4,
    5
];

function calcolo () 
{  
    console.log(calcolo = numeri[2] - numeri [0] );

}

calcolo();


var animali = [
    "cane",
    "cavallo",
    "pulce",
    "tartaruga",
];

let varibilePop = animali.pop();
console.log(varibilePop);
console.log(animali);

let variabilePush = animali.push('nunzioman');
console.log(variabilePush);
console.log(animali);

let variabileShift = animali.shift();
console.log(variabileShift);
console.log(animali);

let variabileUnShift = animali.unshift('cavalletta');
console.log(variabileUnShift);
console.log(animali);