export class Cercle implements Iforme {
   private _rayon : number;
   constructor(rayon:number) {
      this._rayon=rayon;
   }

   public aire() : number{
      return Math.PI*this._rayon*this._rayon;  //Math.PI* ??;
   }
   public perimetre(): number {
      return 2*Math.PI*this._rayon
   }
   public afficherNbInstances() {
      
   }

   get rayon():number {
      return this._rayon;
   }
   set rayon(rayon:number) {
      this._rayon=rayon;
   }
}