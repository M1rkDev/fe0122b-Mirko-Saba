var dataAttuale = new Date ();
console.log(dataAttuale);

//document.write(dataAttuale);

var giorno = dataAttuale.getDate();
console.log(giorno);

var anno = dataAttuale.getFullYear();
console.log(anno);

var ore = dataAttuale.getHours();
console.log(ore);

var dataStringa = new Date("10 August 2020");
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
     //document.write(dataStringa);

     console.log(dataStringa.toLocaleDateString('it-IT', options));

     document.write(dataStringa.toLocaleDateString('it-IT', options));