import { Atteint } from "src/app/enumeration/atteint";
import { Decedes } from "src/app/enumeration/decedes";
import { PlaceFraterie } from "src/app/enumeration/placeFraterie";
import { Sexe } from "src/app/enumeration/sexe";
export interface Frere {
    frereId: number;

    nom:string;
  
    prenom:string;
  
    atteint:Atteint;
  
    placeFratrie:PlaceFraterie;
  
    sexe: Sexe;
  
    decedes: Decedes;
  
    age:number;
  
    idFiche:number;
  
}
