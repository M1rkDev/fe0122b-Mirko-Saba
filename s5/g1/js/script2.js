function orologio (){

    var dataAttuale = new Date ();
    console.log(dataAttuale);

    let ore = String(dataAttuale.getHours()).padStart(2,"0");
    console.log(ore);

    let minuti = String(dataAttuale.getMinutes()).padStart(2,"0");
    console.log(minuti);

    let secondi = String(dataAttuale.getSeconds()).padStart(2,"0");

    let orario = ore + ":" + minuti + ":" + secondi;
    console.log(orario);

    document.getElementById("orologio").innerHTML = orario;

    
    
}

setInterval(orologio, 1000);