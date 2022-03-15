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
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.firstDeposit = 0;
        this.secondDeposit = 0;
        this.listaDepositi = [];
        this.listaPrelievi = [];
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.Depositi = function () {
        this.listaDepositi.forEach(function (e) {
            console.log(e);
        });
    };
    SonAccount.prototype.Prelievi = function () {
        this.listaPrelievi.forEach(function (e) {
            console.log(e);
        });
    };
    SonAccount.prototype.oneDeposit = function (num) {
        this.firstDeposit = num;
        this.listaDepositi.push({ data: new Date(), deposito: num });
        return this.balanceInit += num;
    };
    SonAccount.prototype.oneWithDraw = function (num) {
        this.listaPrelievi.push({ data: new Date(), prelievo: this.balanceInit -= num });
        return this.balanceInit -= num;
    };
    SonAccount.prototype.twoDeposit = function (num) {
        this.secondDeposit = num;
        return this.balanceInit += num;
    };
    SonAccount.prototype.twoWithDraw = function (num) {
        return this.balanceInit -= num;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        return this.balanceInit += (this.balanceInit * 10 / 100);
    };
    return MotherAccount;
}(SonAccount));
var contoUtente1 = new SonAccount(0);
//Controllo il saldo iniziale di 0
console.log(contoUtente1);
console.log(contoUtente1.oneDeposit(500));
console.log(contoUtente1.oneDeposit(300));
console.log(contoUtente1.oneDeposit(200));
console.log(contoUtente1.oneWithDraw(160));
console.log(contoUtente1.oneWithDraw(60));
console.log(contoUtente1.twoDeposit(300));
console.log(contoUtente1.twoWithDraw(100));
console.log(contoUtente1);
contoUtente1.Depositi();
contoUtente1.Prelievi();
var contoUtente2 = new MotherAccount(0);
console.log(contoUtente2);
console.log(contoUtente2.oneDeposit(300));
console.log(contoUtente2.oneDeposit(100));
console.log(contoUtente2);
console.log(contoUtente2.oneWithDraw(150));
console.log(contoUtente2.oneWithDraw(50));
console.log(contoUtente2);
console.log(contoUtente2.twoDeposit(300));
console.log(contoUtente2);
console.log(contoUtente2.twoWithDraw(100));
console.log(contoUtente2.addInterest());
contoUtente2.Depositi();
contoUtente2.Prelievi();
