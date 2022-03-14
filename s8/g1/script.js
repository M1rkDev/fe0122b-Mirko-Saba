var giocatore1 = 25;
var giocatore2 = 35;
var numeroCasuale = Math.floor(Math.random() * (100 - 1) + 1);
var prova11 = Math.abs(numeroCasuale - giocatore1);
var prova22 = Math.abs(numeroCasuale - giocatore2);
console.log("il numero casuale generato è: " + numeroCasuale);
function prova() {
    if (giocatore1 == numeroCasuale) {
        console.log("ha vinto il giocatore 1!");
    }
    if (giocatore2 == numeroCasuale) {
        console.log("ha vinto il giocatore 2!");
    }
    if (prova11 < prova22) {
        console.log("Si è avvicinato di piu giocatore 1!");
    }
    else {
        console.log("Si è avvicinato di piu giocatore 2!");
    }
}
prova();
