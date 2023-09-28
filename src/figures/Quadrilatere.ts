export class Quadrilatere implements Iforme {
    private _cote1: number;
    private _cote2: number;
    private _cote3: number;
    private _cote4: number;
    private _angleA: number;
    private _angleC: number;

    constructor(cote1:number, cote2:number, cote3:number, cote4:number, angleA:number, angleC:number) {
        this._cote1=cote1;
        this._cote2=cote2;
        this._cote3=cote3;
        this._cote4=cote4;
        this._angleA=angleA;
        this._angleC=angleC;
    }
    public aire() : number{
       return 0.5*this._cote1*this._cote4*Math.sin(2*Math.PI*this._angleA/360)+0.5*this._cote2*this._cote3*Math.sin(2*Math.PI*this._angleC/360);
    }
    public perimetre(): number {
        return this._cote1+this._cote2+this._cote3+this._cote4
    }
    public afficherNbInstances() {
      
    }
}