import { EventEmitter, Output, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Fiche } from 'src/model/fiche';
@Component({
  selector: 'fiche2-score-clinique',
  templateUrl: './score-clinique.component.html',
  styleUrls: ['./score-clinique.component.css']
})
export class ScoreCliniqueComponent implements OnInit,DoCheck,OnChanges {

  @Input('ScoreCliniqueUpd') ScoreCliniqueUpd: Fiche | undefined;

  fiche7!: Fiche;

  score = ['Limite', 'Extensif', 'Moin1'];

  constructor() {
    this.fiche7 = { score: 'Moin1', scoreClinique: 0, scoreEBMT: 0 } as Fiche;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur = changes.ScoreCliniqueUpd.previousValue;
    const currentValue = changes.ScoreCliniqueUpd.currentValue

    if (derniereValeur == undefined && currentValue != undefined) {

      this.fiche7 = currentValue;

    }
  }
  ngDoCheck(): void {

    /*
    if (this.ScoreCliniqueUpd!=undefined){
      this.fiche7=this.ScoreCliniqueUpd;
    }*/

  }

  ngOnInit(): void {
  }

  saveScoreCliInformations(){
    return this.fiche7;
  }

}

