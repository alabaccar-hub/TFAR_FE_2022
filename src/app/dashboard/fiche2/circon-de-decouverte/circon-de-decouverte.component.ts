import { Component, Input, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Fiche } from 'src/model/fiche';
@Component({
  selector: 'fiche2-circon-de-decouverte',
  templateUrl: './circon-de-decouverte.component.html',
  styleUrls: ['./circon-de-decouverte.component.css']
})
export class CirconDeDecouverteComponent implements OnInit, DoCheck, OnChanges  {
  @Input('circonstanceDec') circonstanceDec: Fiche | undefined;

  fiche2!: Fiche;
  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];
  typeCancer: any;

  //autres:any;


  constructor() {
    this.fiche2 = {
      syndromeAnemique: 'NP', syndromeHem: 'NP', syndromeInf: 'NP', decouverteFort: 'NP', enqueteFam: 'NP', typeCancer: '', cancer: 'NP'
    } as Fiche;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur = changes.circonstanceDec.previousValue;
    const currentValue = changes.circonstanceDec.currentValue

    if (derniereValeur == undefined && currentValue != undefined) {

      this.fiche2 = currentValue;

    }
  }
  ngDoCheck(): void {

    /*
    if (this.circonstanceDec != undefined) {
      this.fiche2 = this.circonstanceDec
    }*/


  }

  ngOnInit(): void {
  }

  saveCirDecInformations() {
    return this.fiche2;
  }

}


