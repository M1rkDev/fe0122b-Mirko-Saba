var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratori = /** @class */ (function () {
    function Lavoratori(redditoannuolordo, tasseinps, tasseirpef) {
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return Lavoratori;
}());
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista(redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    LiberoProfessionista.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    LiberoProfessionista.prototype.getTasseInps = function () {
        return (this.redditoannuolordo * this.tasseinps) / 100;
    };
    LiberoProfessionista.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo * this.tasseirpef) / 100;
    };
    LiberoProfessionista.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return LiberoProfessionista;
}(Lavoratori));
var lavoratore1 = new LiberoProfessionista(30000, 10, 20);
console.table(lavoratore1);
console.log("Tassato inps: " + lavoratore1.getTasseInps());
console.log("Tassato irpef: " + lavoratore1.getTasseIrpef());
console.log("Reddito Annuo netto: " + lavoratore1.getRedditoAnnuoNetto());
console.log(lavoratore1.getUtileTasse());
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    Artigiano.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Artigiano.prototype.getTasseInps = function () {
        return (this.redditoannuolordo * this.tasseinps) / 100;
    };
    Artigiano.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo * this.tasseirpef) / 100;
    };
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return Artigiano;
}(Lavoratori));
var lavoratore2 = new Artigiano(24000, 7, 13);
console.table(lavoratore2);
console.log("Tassato inps: " + lavoratore2.getTasseInps());
console.log("Tassato irpef" + lavoratore2.getTasseIrpef());
console.log("Reddito Annuo netto: " + lavoratore2.getRedditoAnnuoNetto());
console.log(lavoratore2.getUtileTasse());
var Commercianti = /** @class */ (function (_super) {
    __extends(Commercianti, _super);
    function Commercianti(redditoannuolordo, tasseinps, tasseirpef) {
        return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
    }
    Commercianti.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Commercianti.prototype.getTasseInps = function () {
        return (this.redditoannuolordo * this.tasseinps) / 100;
    };
    Commercianti.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo * this.tasseirpef) / 100;
    };
    Commercianti.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return Commercianti;
}(Lavoratori));
var lavoratore3 = new Commercianti(51000, 22, 29);
console.table(lavoratore3);
console.log("Tassato inps: " + lavoratore3.getTasseInps());
console.log("Tassato irpef: " + lavoratore3.getTasseIrpef());
console.log("Reddito Annuo netto: " + lavoratore3.getRedditoAnnuoNetto());
console.log(lavoratore3.getUtileTasse());
