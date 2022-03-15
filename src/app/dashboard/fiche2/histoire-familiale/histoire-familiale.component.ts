import { Fiche } from './../../../../model/fiche';

import { Component, OnInit, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'fiche2-histoire-familiale',
  templateUrl: './histoire-familiale.component.html',
  styleUrls: ['./histoire-familiale.component.css']
})
export class HistoireFamilialeComponent implements OnInit, DoCheck, OnChanges {

  @Input('histoireFam') histoireFam: Fiche | undefined;


  fiche1!: Fiche;

  tab2: number[] = [0, 1, 2, 3, 4, 5];

  tab: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



  dConsanguiniteParent = ['NP', 'Absence', 'Endogamme', 'Lointaine', 'Double cousins germains (2 eme degre)', 'Cousins germains(3 eme degre)'];

  constructor() {



  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur = changes.histoireFam.previousValue;
    const currentValue = changes.histoireFam.currentValue

    if (derniereValeur == undefined && currentValue != undefined) {

      this.fiche1 = currentValue;

    }
  }


  ngDoCheck(): void {

    /*
    if (this.histoireFam!=undefined){
      this.fiche1=this.histoireFam
    }*/


  }

  ngOnInit(): void {

    this.fiche1 = { degConsang: 'NP', nbVivant: 0, placeEnfant: 0, nbMort: 0, mortNe: 0, avortement: 0, nbCousin: 0, nbMembre: 0 } as Fiche;

  }

  saveFamille() {
    return this.fiche1;
  }




}
