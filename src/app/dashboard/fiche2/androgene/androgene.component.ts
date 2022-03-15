import {Component, EventEmitter, Input, OnInit, Output, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Androgene } from 'src/model/androgene';
@Component({
  selector: 'fiche2-androgene',
  templateUrl: './androgene.component.html',
  styleUrls: ['./androgene.component.css']
})
export class AndrogeneComponent implements OnInit,DoCheck,OnChanges {
  androgene!: Androgene;

  dataAndrogArray:Array<Androgene>=[];

  @Input('androgeneUpd') androgeneUpd: Array<Androgene> | undefined;

  //mois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

  mois=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

  response = ['NP', 'RC', 'RP', 'RM', 'Echec'];

  constructor() { 
    this.androgene = { mois: 1, reponse: 'NP' } as Androgene;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur = changes.androgeneUpd.previousValue;
    const currentValue = changes.androgeneUpd.currentValue

    if (derniereValeur == undefined && currentValue != undefined) {

      this.dataAndrogArray = currentValue;

    }
  }
  ngDoCheck(): void {

  }
  ngOnInit(): void {    this.dataAndrogArray.push(this.androgene);
  }
  saveAndrogeneInformations() {
    return this.dataAndrogArray;
  }



  addForm(){

    if (this.dataAndrogArray.length<24){

      this.androgene = { mois: 1, reponse: 'NP' } as Androgene;
      this.dataAndrogArray.push(this.androgene);
      console.log("data after add  :  ",this.dataAndrogArray);

    } else {

      console.log('length of the array must not be longer then 24')

    }


  }

  removeForm(index:number){

    this.dataAndrogArray.splice(index,1);

    console.log("data after remove :  ",this.dataAndrogArray);



  }



}




