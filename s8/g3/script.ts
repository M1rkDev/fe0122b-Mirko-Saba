abstract class Lavoratori {
   
    redditoannuolordo:number
    
    tasseinps:number
    
    tasseirpef:number

        constructor (redditoannuolordo: number, tasseinps: number, tasseirpef: number){
            this.redditoannuolordo = redditoannuolordo;
            this.tasseinps = tasseinps;
            this.tasseirpef = tasseirpef;
        }

       abstract getUtileTasse():number

       abstract getTasseInps():number
        
       abstract getTasseIrpef():number
        
       abstract getRedditoAnnuoNetto():number
    
    
}


class LiberoProfessionista extends Lavoratori {
    
    constructor (redditoannuolordo: number, tasseinps: number, tasseirpef: number){
        super(redditoannuolordo, tasseinps, tasseirpef)
    }

     getUtileTasse():number {
         
        return this.getTasseInps() + this.getTasseIrpef()
     }

     getTasseInps():number {
        return   (this.redditoannuolordo * this.tasseinps) / 100  
     }
        
     getTasseIrpef():number {
        return  (this.redditoannuolordo * this.tasseirpef) / 100
     }
        
     getRedditoAnnuoNetto():number {
        return this.redditoannuolordo - this.getUtileTasse()
     }
}



let lavoratore1 = new LiberoProfessionista(30000, 10, 20 )

console.table(lavoratore1)
console.log("Tassato inps: " + lavoratore1.getTasseInps())
console.log("Tassato irpef: "+ lavoratore1.getTasseIrpef())
console.log("Reddito Annuo netto: " + lavoratore1.getRedditoAnnuoNetto())
console.log(lavoratore1.getUtileTasse())




class Artigiano extends Lavoratori {
    
    constructor (redditoannuolordo: number, tasseinps: number, tasseirpef: number){
        super(redditoannuolordo, tasseinps, tasseirpef)
    }

     getUtileTasse():number {
         
        return this.getTasseInps() + this.getTasseIrpef()
     }

     getTasseInps():number {
        return   (this.redditoannuolordo * this.tasseinps) / 100
     }
        
     getTasseIrpef():number {
        return  (this.redditoannuolordo * this.tasseirpef) / 100
     }
        
     getRedditoAnnuoNetto():number {
        return this.redditoannuolordo - this.getUtileTasse()
     }
}

let lavoratore2 = new Artigiano(24000, 7, 13 )

console.table(lavoratore2)
console.log("Tassato inps: " + lavoratore2.getTasseInps())
console.log("Tassato irpef" + lavoratore2.getTasseIrpef())
console.log("Reddito Annuo netto: " + lavoratore2.getRedditoAnnuoNetto())
console.log(lavoratore2.getUtileTasse())


class Commercianti extends Lavoratori {
    
    constructor (redditoannuolordo: number, tasseinps: number, tasseirpef: number){
        super(redditoannuolordo, tasseinps, tasseirpef)
    }

     getUtileTasse():number {
         
        return this.getTasseInps() + this.getTasseIrpef()
     }

     getTasseInps():number {
        return   (this.redditoannuolordo * this.tasseinps) / 100
     }
        
     getTasseIrpef():number {
        return  (this.redditoannuolordo * this.tasseirpef) / 100
     }
        
     getRedditoAnnuoNetto():number {
        return this.redditoannuolordo - this.getUtileTasse()
     }
}

let lavoratore3 = new Commercianti(51000, 22, 29 )

console.table(lavoratore3)
console.log("Tassato inps: " + lavoratore3.getTasseInps())
console.log("Tassato irpef: " + lavoratore3.getTasseIrpef())
console.log("Reddito Annuo netto: " + lavoratore3.getRedditoAnnuoNetto())
console.log(lavoratore3.getUtileTasse())
