var FirstUser = /** @class */ (function () {
    function FirstUser(marca, modello, numeroTel, creditoResiduo, numeroChiamate) {
        this.marca = marca;
        this.modello = modello;
        this.numeroTel = numeroTel;
        this.creditoResiduo = creditoResiduo;
        this.numeroChiamate = numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.creditoResiduo += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.creditoResiduo -= (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    FirstUser.prototype.numero404 = function () {
        return this.creditoResiduo;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var carica = new FirstUser("Samsung", "S21", 3386290112, 20, 10);
carica.ricarica(20);
carica.chiamata(10);
carica.chiamata(20);
console.table(carica);
var SecondUser = /** @class */ (function () {
    function SecondUser(marca, modello, numeroTel, creditoResiduo, numeroChiamate) {
        this.marca = marca;
        this.modello = modello;
        this.numeroTel = numeroTel;
        this.creditoResiduo = creditoResiduo;
        this.numeroChiamate = numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.creditoResiduo += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.creditoResiduo -= (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.creditoResiduo;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var carica2 = new SecondUser("Huawei", "p30", 3386491333, 10, 5);
carica2.ricarica(20);
carica2.chiamata(10);
carica2.chiamata(20);
console.table(carica2);
var ThirdUser = /** @class */ (function () {
    function ThirdUser(marca, modello, numeroTel, creditoResiduo, numeroChiamate) {
        this.marca = marca;
        this.modello = modello;
        this.numeroTel = numeroTel;
        this.creditoResiduo = creditoResiduo;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.creditoResiduo += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.creditoResiduo -= (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.creditoResiduo;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var carica3 = new ThirdUser("Apple", "iPhone 13 Pro", 3286320122, 50, 2);
carica3.ricarica(20);
carica3.chiamata(10);
carica3.chiamata(20);
console.table(carica3);
