export class PentagoneR implements Iforme {
    private _longeurCote: number;

    constructor(longueurCote:number) {
        this._longeurCote=longueurCote;
    }

    public aire() : number{
        return 5/4*Math.pow(this._longeurCote,2)/Math.tan(36*2*Math.PI/360);
    }
    public perimetre(): number {
        return 5*this._longeurCote;
    }
    public afficherNbInstances() {
      
    }
}