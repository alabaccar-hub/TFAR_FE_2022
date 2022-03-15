import { Patient } from './../../../../model/patient';
import { Component, EventEmitter, Input, OnInit, Output, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'fiche2-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit,DoCheck,OnChanges{



  @Input('patientUpd') patientUpd: Patient | undefined;

  patient!: Patient;

  gouvernorat = ['Ariana', 'Beja', 'BenArous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba'
    , 'Kairouan', 'Kasserine', 'Kebili', 'LeKef', 'Mahdia', 'LaManouba',
    'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'SidiBouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan', 'NP'];

  date = new FormControl(new Date());



  list = [{ "name": "M" }, { "name": "F" }];

  chosenItem = this.list[0].name;


  constructor() {
    this.patient = { sexe: this.chosenItem, gouvernorat: 'NP', dateNaissance: this.date.value } as Patient;


  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);

   const derniereValeur=changes.patientUpd.previousValue;
   const currentValue=changes.patientUpd.currentValue;

   if (derniereValeur==undefined  && currentValue!=undefined){

    this.patient=currentValue;

   }

  }
  ngDoCheck(): void {


    /*if (this.patientUpd!=undefined){
      this.patient=this.patientUpd
    }*/



  }

  ngOnInit(): void {

  }

  radioChange(a:any) {
    this.patient.sexe = a;

    console.log('qqqqqq',this.patient.sexe);



  }

  savePatientInformations() {
    return this.patient;
  }

}

