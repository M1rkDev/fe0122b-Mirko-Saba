fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (vestiti) {
    vestiti.forEach(function (item) {
        var capi = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(capi);
        console.log("il capo è scontato di: " + capi.getsaldocapo() + " euro");
        console.log("il prezzo già scontato del capo è di : " + capi.getacquistocapo() + " euro");
    });
});
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Abbigliamento;
}());
var primoCapo = new Abbigliamento(6, 1003, "estate", "camicia", 2522, 26, "blue", 120, 146.4, "magazzino", 30);
console.table(primoCapo);
console.log("il capo è scontato di: " + primoCapo.getsaldocapo() + " euro");
console.log("il prezzo già scontato del capo è di : " + primoCapo.getacquistocapo() + " euro");
var secondoCapo = new Abbigliamento(7, 2020, "inverno", "giacca", 2000, 30, "nero", 170, 207.4, "negozio", 15);
console.table(secondoCapo);
console.log("il capo è scontato di: " + secondoCapo.getsaldocapo() + " euro");
console.log("il prezzo già scontato del capo è di : " + secondoCapo.getacquistocapo() + " euro");
var terzoCapo = new Abbigliamento(8, 1558, "autunno", "jeans", 1942, 12, "rossi", 30, 36.6, "negozio", 50);
console.table(terzoCapo);
console.log("il capo è scontato di: " + terzoCapo.getsaldocapo() + " euro");
console.log("il prezzo già scontato del capo è di : " + terzoCapo.getacquistocapo() + " euro");
