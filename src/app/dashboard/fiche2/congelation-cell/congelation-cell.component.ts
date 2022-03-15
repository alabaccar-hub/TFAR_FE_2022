import { Laboratoire } from './../../../../model/laboratoire';
import { Observable } from 'rxjs';
import { Component, OnInit, DoCheck, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LaboratoireService } from 'src/app/services/laboratoire.service';
import { map } from 'rxjs/operators';
import { Fiche } from 'src/model/fiche';
import { Output } from '@angular/core';

@Component({
  selector: 'fiche2-congelation-cell',
  templateUrl: './congelation-cell.component.html',
  styleUrls: ['./congelation-cell.component.css']
})
export class CongelationCellComponent implements OnInit, DoCheck,OnChanges
  {

    @Input('CongelationCellUpd') CongelationCellUpd: Fiche | undefined;

  fiche6!: Fiche;

  tabenum2 = ['Faite', 'Nonfaite', 'Moin1', 'NP'];

  enum22 = 'NP';

  lab=['Pasteur','Sousse','Sfax'];

  //laboratoires$!: Observable<Laboratoire[]>;


  constructor(private laboratoireService: LaboratoireService) {
    this.fiche6 = { congelationCellule: 'NP' } as Fiche;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur = changes.CongelationCellUpd.previousValue;
    const currentValue = changes.CongelationCellUpd.currentValue

    if (derniereValeur == undefined && currentValue != undefined) {

      this.fiche6 = currentValue;

    }
  }



  ngDoCheck(): void {

    /*
    if (this.CongelationCellUpd!=undefined){
      this.fiche6=this.CongelationCellUpd;
    }*/

    if (this.fiche6.congelationCellule != 'Faite') {

      this.fiche6.typePrelevement = '';
      this.fiche6.labo='Sfax';


    }

  }

  ngOnInit(): void {
    //this.getAlllaboratoires();
  }

 /* getAlllaboratoires() {
    this.laboratoires$ = this.laboratoireService.getAllLaboratoires().pipe(map(data => {
      this.lab1=data[0].nom
      console.log(data); return data
    }));
  }*/

  saveCongCellInformations(){
    return this.fiche6;
  }

}

