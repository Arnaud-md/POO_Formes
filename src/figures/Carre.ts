export class Carre implements Iforme {
   private _longeurCote: number;
   private static nbrCarre:number=0;
   constructor(longueurCote:number) {
        this._longeurCote=longueurCote;
        Carre.nbrCarre++;
   }

   public aire() : number{
        return this._longeurCote*this._longeurCote;
       
   }
   public perimetre(): number {
        return 4*this._longeurCote;
   }
   public afficherNbInstances() {
        console.log("le nombre d'instances de la classe Carre est : "+Carre.nbrCarre);
   }
   get longueurCote():number {
        return this._longeurCote;
   }
   set longueurCote(longueurCote:number) {
        this._longeurCote=longueurCote;
   }
}