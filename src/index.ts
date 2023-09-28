import {Carre} from "./figures/Carre"
import { Cercle } from "./figures/Cercle"
import { Losange } from "./figures/Losange"
import { Parrallelogramme } from "./figures/Parrallelogramme"
import { PentagoneR } from "./figures/PentagoneR"
import { Quadrilatere } from "./figures/Quadrilatere"
class Pomme {

    public name: string
    public color: string

    constructor(
        name: string,
        color: string,
    ) {
      console.log('Initialisation de la pomme')
      this.name = name
      this.color = color
    }

    public eat() {
      console.log('Je mange une pomme')
    }

    public changeColor(newColor: string) {
      this.color = newColor
    }

}

// const apple = new Pomme('Golden', 'yellow')
// apple.eat()
// apple.changeColor('red')
// console.log(apple.color)
let monCarre:Forme;
let monCarre2:Forme;
let monCercle:Forme;
let monLosange:Forme;
let monParallelogramme:Forme;
let monPentagone:Forme;
let monQuadrilatere:Forme;
monCarre = new Carre(80);
monCarre2 = new Carre(18);
console.log("aire "+monCarre.aire());
console.log("perimetre "+monCarre.perimetre());
monCarre.afficherNbInstances();
console.log("aire "+monCarre2.aire());
console.log("perimetre "+monCarre2.perimetre());
monCarre2.afficherNbInstances();
monCercle = new Cercle(18);
console.log("aire "+monCercle.aire());
console.log("perimetre "+monCercle.perimetre());
monLosange = new Losange(18,80);
console.log("aire "+monLosange.aire());
console.log("perimetre "+monLosange.perimetre());
monParallelogramme = new Parrallelogramme(18,80,20);
console.log("aire "+monParallelogramme.aire());
console.log("perimetre "+monParallelogramme.perimetre());
monPentagone = new PentagoneR(18);
console.log("aire "+monPentagone.aire());
console.log("perimetre "+monPentagone.perimetre());
monQuadrilatere = new Quadrilatere(12,9,5,14,80,110);
console.log("aire "+monQuadrilatere.aire());
console.log("perimetre "+monQuadrilatere.perimetre());