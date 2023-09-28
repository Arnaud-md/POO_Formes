export class Losange implements Iforme {
    private _petiteDiag: number;
    private _grandeDiag: number;

    constructor(petiteDiag:number, grandeDiag:number) {
        this._petiteDiag=petiteDiag;
        this._grandeDiag=grandeDiag;
    }
    public aire() : number{
        return this._petiteDiag*this._grandeDiag/2;
    }
    public perimetre(): number {
        return 2*Math.sqrt(Math.pow(this._petiteDiag,2)+Math.pow(this._grandeDiag,2));
    }
    public afficherNbInstances() {
      
    }
    get petiteDiag():number {
        return this._petiteDiag;
    }
    set petiteDiag(petiteDiag:number) {
        this._petiteDiag=petiteDiag;
    }
    get grandeDiag():number {
        return this._grandeDiag;
    }
    set grandeDiag(grandeDiag:number) {
        this._grandeDiag=grandeDiag;
    }
}