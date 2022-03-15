import { EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Fiche } from 'src/model/fiche';
@Component({
  selector: 'fiche2-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent implements OnInit, DoCheck,OnChanges {

  @Input('traitementUpd') traitementUpd: Fiche | undefined;

  fiche8!: Fiche;

  a: any;

  tabenum1 = ['Oui', 'Non', 'NP', 'moin1'];

  tabenum8 = ['Moin1', 'Inf10', 'Between10Et20', 'Sup20'];

  tab = ['', 'Bonne', 'Moyenne', 'Mediocre'];

  toxicite = ['Virilisation', 'Hepatique', 'Autre', 'Moin1'];

  tableau: number[] = [];

  tableau1: number[] = [];

  donneur = ['FF', 'FM', 'MF', 'MM', 'Mere', 'Pere'];

  tabp = ['', 'condition socio-economique', 'Refus', 'Deces', 'Donneur Fonconie', 'malade polytransfuse', 'Autre'];

  tabirr = ['', 'non', 'TBI', 'TNI', 'NP', 'Autre'];

  tabenum2 = ['Faite', 'Nonfaite', 'Moin1', 'NP'];

  tabSouche = ['', 'Cordon', 'Moelle', 'Sang peripherique'];

  tabenum9 = ['Zero', 'I', 'II', 'III', 'IV', 'Moin1'];

  tabenum10 = ['Aucune', 'Limitee', 'Extensive', 'Moin1'];

  taigue = ['Myeloblastique', 'Lymphoblastique', 'NP', 'Moin1'];

  //tabstatut = ['', 'PDV', 'Vivant en RC', 'Vivant en RP', 'Vivant en RM', 'Echec', 'Decede', 'Manque d information'];

  tabstatut=['RC', 'RP', 'Echec', 'RM', 'Decede', 'Moin1', 'PDV', 'MqInfo'];

  date1 = new FormControl(new Date());
  date2 = new FormControl(new Date());
  date3 = new FormControl(new Date());

  constructor() {

    this.rempTab();
    this.rempTab1();

    this.fiche8 = {
      transfusion: 'NP', ageTransf: 0, delaiDiag: 0, nbCG: 'Moin1', nbCP: 'Moin1', chelationFer: 'NP', nilevar: 'NP', oxymetholone: 'NP', androtordyl: 'NP', toxicite: 'Moin1',
      enqueteHLA: 'NP', nbFratTyp: 0, nbFratNTyp: 0, greffeFaite: 'NP', delaiRappDiag: 0, cyclophosphamide: 'NP', fludarabine: 'NP', busulfan: 'NP',
      irradiation: 'NP', serotherapie: 'NP', gradeaGvH: 'Moin1', cgvH: 'Moin1', mvo: 'NP', complicationPulmonaire: 'NP', survieJ100: 'NP', smd: 'NP', transformationAigue: 'NP', ageDiagLA: 0,
      traitementLA: 'NP', cancerE: 'NP', evolution_cyto: 'NP', androDebut: this.date1.value, androFin: this.date2.value,ddn:this.date3.value,
      donneurComp:0,sortieAplasie:8

    } as Fiche;

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur = changes.traitementUpd.previousValue;
    const currentValue = changes.traitementUpd.currentValue

    if (derniereValeur == undefined && currentValue != undefined) {

      this.fiche8 = currentValue;

    }
  }

  ngDoCheck(): void {

    /*
    if (this.traitementUpd!=undefined){
      this.fiche8=this.traitementUpd;
    }*/

    if (this.fiche8.chelationFer != 'Oui') {
      this.fiche8.chelateur = '';
    }

    if (this.fiche8.cyclophosphamide != 'Oui') {
      this.fiche8.doseCum1 = 0;

    }
    if (this.fiche8.fludarabine != 'Oui') {
      this.fiche8.doseCum2 = 0;

    }

    if (this.fiche8.busulfan != 'Oui') {
      this.fiche8.doseCum3 = 0;
    }

    if (this.fiche8.serotherapie != 'Faite') {
      this.fiche8.sal = 'NP';
    }
    if (this.fiche8.sal != 'Oui') {
      this.fiche8.doseSAL = 0;

    }

    if (this.fiche8.complicationPulmonaire != 'Oui') {
      this.fiche8.preciseCompPulm = '';
    }

    if (this.fiche8.smd != 'Oui') {
      this.fiche8.ageDiagSMD = 0;
    }

    if (this.fiche8.cancerE != 'Oui') {
      this.fiche8.localisation = '';
      this.fiche8.typeHistologique = '';
      this.fiche8.traitementCancer = 'NP';
    }

    if (this.fiche8.traitementCancer != 'Oui') {
      this.fiche8.preciseTraitement = '';
    }

    if (this.fiche8.evolution_cyto != 'Oui') {
      this.fiche8.formuleChrom = '';
      this.fiche8.ageE = 0;
    }

  }

  ngOnInit(): void {

  }

  rempTab() {
    for (let i = 0; i <= 4; i++) {
      this.tableau.push(i);
    }
  }

  rempTab1() {
    for (let i = 8; i <= 13; i++) {
      this.tableau1.push(i);
    }
  }

  /*public onDate(a: Date): void {
    this.fiche8.androDebut = a;
    this.onChangeFiche8();
  }*/


  saveTraitInformations(){
    return this.fiche8;
  }

}

