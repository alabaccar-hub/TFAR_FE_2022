import { PlaceCousin } from "src/app/enumeration/placeCousin";
import { Sexe } from "src/app/enumeration/sexe";

export interface Cousin {
    cousinId:number;

    nom:string;
  
    prenom:string;
  
    placeCousin: PlaceCousin;
  
    sexe:Sexe;
  
    idFiche:number;
  
}
