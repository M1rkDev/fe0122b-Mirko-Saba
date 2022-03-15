class SonAccount{

    balanceInit:number;
    firstDeposit: number = 0;
    secondDeposit: number = 0;
    listaDepositi: object[] = [];
    listaPrelievi: object[] = [];
    
    

    constructor(balanceInit:number){
        this.balanceInit = balanceInit;
        
    }

    Depositi(){
        this.listaDepositi.forEach(e => {
            console.log(e)
        })
        
    }

    Prelievi(){
        this.listaPrelievi.forEach(e => {
            console.log(e)
        }) 
    }

    oneDeposit(num: number):number {
        this.firstDeposit = num
        this.listaDepositi.push({data: new Date(), deposito: num })
        return this.balanceInit += num
    }

    oneWithDraw(num: number): number {
        this.listaPrelievi.push({data: new Date(), prelievo: this.balanceInit -= num })
        return this.balanceInit -= num
    }

    twoDeposit(num: number):number{
        this.secondDeposit = num
        return this.balanceInit += num
    }

    twoWithDraw(num: number):number{
        return this.balanceInit -= num
    }
    

}


class MotherAccount extends SonAccount {

    constructor(balanceInit:number){
        
        super (balanceInit);
    }

    addInterest():number{
        return this.balanceInit += (this.balanceInit * 10/100)
    }
}


let contoUtente1 = new SonAccount(0)

//Controllo il saldo iniziale di 0
console.log(contoUtente1)

console.log(contoUtente1.oneDeposit(500))
console.log(contoUtente1.oneDeposit(300))
console.log(contoUtente1.oneDeposit(200))

console.log(contoUtente1.oneWithDraw(160))
console.log(contoUtente1.oneWithDraw(60))

console.log(contoUtente1.twoDeposit(300))

console.log(contoUtente1.twoWithDraw(100))

console.log(contoUtente1)
contoUtente1.Depositi()
contoUtente1.Prelievi()

let contoUtente2 = new MotherAccount(0)

console.log(contoUtente2)
console.log(contoUtente2.oneDeposit(300))
console.log(contoUtente2.oneDeposit(100))


console.log(contoUtente2)
console.log(contoUtente2.oneWithDraw(150))
console.log(contoUtente2.oneWithDraw(50))

console.log(contoUtente2)
console.log(contoUtente2.twoDeposit(300))

console.log(contoUtente2)
console.log(contoUtente2.twoWithDraw(100))

console.log(contoUtente2.addInterest())
contoUtente2.Depositi()
contoUtente2.Prelievi()

