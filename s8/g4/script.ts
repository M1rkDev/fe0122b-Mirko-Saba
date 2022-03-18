interface Smartphone {

    marca: string;
    modello: string;
    numeroTel: number;
    creditoResiduo: number;
    numeroChiamate: number;

     ricarica(double, unaRicarica):void;

     chiamata(double, minutiDurata):void;

     numero404():number;

     getNumeroChiamate(): number;

     azzeraChiamate():void;

}


class FirstUser implements Smartphone {

    public marca: string;
    public modello: string;
    public numeroTel: number;
    public creditoResiduo: number;
    public numeroChiamate: number;

        constructor (marca: string, modello: string, numeroTel: number, creditoResiduo: number, numeroChiamate: number){
            this.marca = marca;
            this.modello = modello;
            this.numeroTel = numeroTel;
            this.creditoResiduo = creditoResiduo;
            this.numeroChiamate = numeroChiamate;

        }
    ricarica(unaRicarica: any): void {
         this.creditoResiduo += unaRicarica
            
    }
    chiamata(minutiDurata: any): void {
        this.creditoResiduo -= (minutiDurata * 0.20)
        this.numeroChiamate++
    }
    numero404(): number {
        return this.creditoResiduo
        
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
        
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

        
}

let carica = new FirstUser("Samsung","S21",3386290112, 20, 10)

carica.ricarica(20)
carica.chiamata(10)
carica.chiamata(20)
console.table(carica)

class SecondUser implements Smartphone {

    public marca: string;
    public modello: string;
    public numeroTel: number;
    public creditoResiduo: number;
    public numeroChiamate: number;

        constructor (marca: string, modello: string, numeroTel: number, creditoResiduo: number, numeroChiamate: number){
            this.marca = marca;
            this.modello = modello;
            this.numeroTel = numeroTel;
            this.creditoResiduo = creditoResiduo;
            this.numeroChiamate = numeroChiamate;

        }
    ricarica(unaRicarica: any): void {
         this.creditoResiduo += unaRicarica
            
    }
    chiamata(minutiDurata: any): void {
        this.creditoResiduo -= (minutiDurata * 0.20)
        this.numeroChiamate++
    }
    numero404(): number {
        return this.creditoResiduo
        
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
        
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

        
}

let carica2 = new SecondUser("Huawei","p30",3386491333, 10, 5)

carica2.ricarica(20)
carica2.chiamata(10)
carica2.chiamata(20)
console.table(carica2)


class ThirdUser implements Smartphone {

    public marca: string;
    public modello: string;
    public numeroTel: number;
    public creditoResiduo: number;
    public numeroChiamate: number;

        constructor (marca: string, modello: string, numeroTel: number, creditoResiduo: number, numeroChiamate: number){
            this.marca = marca;
            this.modello = modello;
            this.numeroTel = numeroTel;
            this.creditoResiduo = creditoResiduo;
            this.numeroChiamate = numeroChiamate;

        }
    ricarica(unaRicarica: any): void {
         this.creditoResiduo += unaRicarica
            
    }
    chiamata(minutiDurata: any): void {
        this.creditoResiduo -= (minutiDurata * 0.20)
        this.numeroChiamate++
    }
    numero404(): number {
        return this.creditoResiduo
        
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
        
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

        
}

let carica3 = new ThirdUser("Apple","iPhone 13 Pro",3286320122, 50, 2)

carica3.ricarica(20)
carica3.chiamata(10)
carica3.chiamata(20)
console.table(carica3)





