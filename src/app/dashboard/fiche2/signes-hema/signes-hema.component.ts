import { Input, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Fiche } from 'src/model/fiche';
@Component({
  selector: 'fiche2-signes-hema',
  templateUrl: './signes-hema.component.html',
  styleUrls: ['./signes-hema.component.css']
})
export class SignesHemaComponent implements OnInit,DoCheck,OnChanges  {

  @Input('SignesHemaUpd') SignesHemaUpd: Fiche | undefined;

  fiche4!: Fiche;

  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];

  tabenum2 = ['Faite', 'Nonfaite', 'Moin1', 'NP'];

  tabenum4 = ['Normale', 'Diminuee', 'Moin1', 'NP'];

  tabenum5 = ['Normale', 'Dysplasie', 'Moin1'];

  tabenum6 = ['Nonfaite', 'Normale', 'Hypoplasie', 'Aplasie', 'Moin1'];

  constructor() {
    this.fiche4 = {
      hbInf: 'NP', plq_inf: 'NP', pnnInf: 'NP', electrophoreseHb: 'NP', myelogramme: 'NP', cellularite: 'NP', morphologie: 'Moin1', bom: 'Moin1',
      hb:0,vgm:0,retic:0,leuco:0,pnn:0,plq:0,ageDebutManiHema:0,hbf:0,erythroblaste:0,pourcenAdipo:0

    } as Fiche;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur = changes.SignesHemaUpd.previousValue;
    const currentValue = changes.SignesHemaUpd.currentValue

    if (derniereValeur == undefined && currentValue != undefined) {

      this.fiche4 = currentValue;

    }
  }
  ngDoCheck(): void {

    /*
    if (this.SignesHemaUpd!=undefined){
      this.fiche4=this.SignesHemaUpd;
    }*/

  }

  ngOnInit(): void {
  }


  saveSigneHemaInformations(){
    return this.fiche4;
  }

}

