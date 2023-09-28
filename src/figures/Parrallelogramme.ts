import { connected } from "process";

export class Parrallelogramme implements Iforme {
    private _hauteur: number;
    private _cote: number;
    private _petitCote: number

    constructor(hauteur:number, cote:number, petitCote:number) {
        this._hauteur=hauteur;
        this._cote=cote;
        this._petitCote=petitCote;
    }
    public aire() : number{
        return this._hauteur*this._cote;
    }
    public perimetre(): number {
        return 2*(this._cote+this._petitCote);
    }
    public afficherNbInstances() {
      
    }
}