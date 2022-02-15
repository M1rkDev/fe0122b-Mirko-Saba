alert("Ciao benvenuto nel sito, riempi il form");
var nome = "mirko";
console.log(nome);

var cognome = "saba";
console.log(cognome);

var nomeCompleto = nome + " " + cognome;
console.log(nomeCompleto);

var anni = 24;
console.log(anni);
console.log("ho" + " " + anni + " " + "anni");

console.log(anni - 20);
console.log(anni + 10);

var tipoanimale;
var animale1 = "sam";
var animale2 = "nuvola";
console.log(animale1 + animale2);

{
    const tipoanimale = "cani";
    console.log(tipoanimale);
    console.log(tipoanimale + "=" + animale1 + " e " + animale2);
    console.log("di chi sono i " + tipoanimale + " di " + nome);
    
}
console.log (tipoanimale);


{ let tempo;
    console.log(tempo);
     tempo = 20;
    console.log(tempo);

    let anni2 = anni + tempo;
    console.log(anni2);
    console.log("fra " + tempo + " anni avrò: " + anni2 + " anni");

}

//console.log(tempo);

var booleano = false;
console.log(booleano);

console.log(nome + cognome + booleano);

booleano = true;
console.log(booleano);
