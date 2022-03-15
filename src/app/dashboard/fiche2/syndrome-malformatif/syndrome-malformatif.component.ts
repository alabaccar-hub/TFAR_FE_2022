import { Component, OnInit, DoCheck, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Fiche } from 'src/model/fiche';
@Component({
  selector: 'fiche2-syndrome-malformatif',
  templateUrl: './syndrome-malformatif.component.html',
  styleUrls: ['./syndrome-malformatif.component.css']
})
export class SyndromeMalformatifComponent implements OnInit, DoCheck,OnChanges {

  @Input('SyndromeMalf') SyndromeMalf: Fiche | undefined;

  fiche3!: Fiche;

  tab: number[] = [];

  tab2: number[] = [];

  tab3: number[] = [];

  tab4: number[] = [];

  tab5: number[] = [];

  tab6: number[] = [];

  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];

  tabDS = ['NP', 'M', '-2 DS', '-3 DS', '-4 DS', '+ DS'];

  tabenum2 = ['Faite', 'Nonfaite', 'Moin1', 'NP'];

  tabepRein = ['non', 'rein gauche', 'rein droit', 'rein bilateral', ''];

  tabEctoTest = ['', 'non', 'droit', 'gauche', 'bilateral'];

  tabAnomVerg = ['NP', 'non', 'inseffisament developpe', 'hypospadias', 'epispadias', 'Autre'];

  tabperfSco = ['Vide', 'Bonne', 'Mauvaise', 'Moyenne', 'NP', 'NonScolaire', 'Moin1'];

  constructor() {
    this.fiche3 = {
      hypotrophie: 'NP', troubleCroi: 'NP', atteinteCut: 'NP', tacheCaf: 'NP', dos: 'NP', ventre: 'NP', membreSup: 'NP', membreInf: 'NP',
      visage: 'NP', thorax: 'NP', hyperPig: 'NP', atteinteTete: 'NP', microcephalie: 'NP', facieTrig: 'NP', traitsFin: 'NP', microphtalmie: 'NP',
      malUro: 'NP', uiv: 'NP', echo: 'NP', reinEctop: 'NP', reinFerChev: 'NP', reinUnique: 'NP', retardPubertaire: 'NP', atteinteOss: 'NP',
      anomPouce: 'NP', anomAutreDoigts: 'NP', courtsTrapus: 'NP', syndactylie: 'NP', agenesieRadius: 'NP', anomOrteil: 'NP',
      typeAnomOrteil: 'NP', bifide: 'NP', luxCongHanche: 'NP', anomNeuro: 'NP', retardMent: 'NP', performanceScolaire: 'NP',
      hypoacousie: 'NP', strabisme: 'NP', anomCardVas: 'NP', echoCoeur: 'NP', anomDig: 'NP', endocrinopathie: 'NP', diabete: 'NP', hypothyroidie: 'NP',
      deficiteGH: 'NP', poidsDS: 'NP', tailleDS: 'NP', anomVerge: 'NP', anomVoisUri: 'NP', autreUrogenital: 'autreMU',tailleNaiss:30,poidsNaiss:1.5,
      aageChDiag:0,aageOssDiag:0,ageRetard:0,poids:0,taille:50,mageChDiag:0,mageOssDiag:0
    } as Fiche;



  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur = changes.SyndromeMalf.previousValue;
    const currentValue = changes.SyndromeMalf.currentValue

    if (derniereValeur == undefined && currentValue != undefined) {

      this.fiche3 = currentValue;

    }
  }

  ngDoCheck(): void {
/*
    if (this.SyndromeMalf!=undefined){
      this.fiche3=this.SyndromeMalf
    }*/

    if (this.fiche3.tacheCaf != 'Oui') {

      this.fiche3.dos = 'NP';

      this.fiche3.ventre = 'NP';

      this.fiche3.membreSup = 'NP';

      this.fiche3.membreInf = 'NP';

      this.fiche3.visage = 'NP';

      this.fiche3.thorax = 'NP';

    }

    if (this.fiche3.reinEctop != 'Oui') {
      this.fiche3.siegeEctopie = '';
    }

    if (this.fiche3.anomVoisUri != 'Oui') {
      this.fiche3.typeAnomVoisUri = '';
    }

    if (this.fiche3.retardPubertaire != 'Oui') {
      this.fiche3.mtanner = '';
      this.fiche3.ptanner = '';
      this.fiche3.ttanner = '';
    }

    if (this.fiche3.anomAutreDoigts != 'Oui') {
      this.fiche3.courtsTrapus = 'NP';
      this.fiche3.syndactylie = 'NP';
      this.fiche3.autreAnomAutreDoigts = '';
    }

    if (this.fiche3.anomOrteil != 'Oui') {
      this.fiche3.typeAnomOrteil = '';
    }

    if (this.fiche3.echoCoeur != 'Oui') {
      this.fiche3.preciseAnomCardio = '';
    }

    if (this.fiche3.anomDig != 'Oui') {
      this.fiche3.preciseAnomDig = '';
    }

    if (this.fiche3.endocrinopathie != 'Oui') {
      this.fiche3.diabete = 'NP';
      this.fiche3.hypothyroidie = 'NP';
      this.fiche3.deficiteGH = 'NP';
      this.fiche3.ageDecouverte = 0;
      this.fiche3.autreSympEndo = '';
    }

  }

  ngOnInit(): void {
    this.rempTab();
    this.rempTab2();
    this.rempTab3();
    this.rempTab4();
    this.rempTab5();
    this.rempTab6();
  }

  rempTab() {
    for (let i = 30; i <= 60; i++) {
      this.tab.push(i);
    }
  }

  rempTab3() {
    for (let i = 0; i <= 80; i++) {
      this.tab3.push(i);
    }
  }

  rempTab4() {
    for (let i = 0; i <= 12; i++) {
      this.tab4.push(i);
    }
  }

  rempTab5() {
    for (let i = 0; i <= 100; i++) {
      this.tab5.push(i);
    }
  }

  rempTab6() {
    for (let i = 50; i <= 200; i++) {
      this.tab6.push(i);
    }
  }

  rempTab2() {
    for (let i = 1.5; i <= 5; i = i + this.fct(0.1)) {
      this.tab2.push(this.fct(i));
    }
  }

  fct(i: number) {
    return Math.round(i * 10) / 10;

  }

  saveSandMalInformations(){
    return this.fiche3;
  }




}