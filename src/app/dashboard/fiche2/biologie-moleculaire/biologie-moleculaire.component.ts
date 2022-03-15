import {Component, EventEmitter, Input, OnInit, Output, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Fiche } from 'src/model/fiche';
@Component({
  selector: 'fiche2-biologie-moleculaire',
  templateUrl: './biologie-moleculaire.component.html',
  styleUrls: ['./biologie-moleculaire.component.css']
})
export class BiologieMoleculaireComponent implements OnInit,DoCheck,OnChanges {

  @Input('BiologieMole') BiologieMole: Fiche | undefined;

  fiche5!: Fiche;

  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];

  tabenum7 = ['Positif', 'Negatif', 'Moin1'];

  constructor() {
    this.fiche5 = { ubiquitination: 'NP', resUbiquitination: 'Moin1' } as Fiche;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur = changes.BiologieMole.previousValue;
    const currentValue = changes.BiologieMole.currentValue

    if (derniereValeur == undefined && currentValue != undefined) {

      this.fiche5 = currentValue;

    }
  }
  ngDoCheck(): void {

    /*
    if (this.BiologieMole!=undefined){
      this.fiche5=this.BiologieMole;
    }*/
  }

  ngOnInit(): void {
  }


  saveBioMolecInformations(){
    return this.fiche5;
  }

}

