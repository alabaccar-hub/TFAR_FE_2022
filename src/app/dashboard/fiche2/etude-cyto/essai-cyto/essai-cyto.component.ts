import { Component,Input, OnInit,DoCheck, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LaboratoireService } from 'src/app/services/laboratoire.service';
import { Cytogenetique } from 'src/model/cytogenetique';
import { Laboratoire } from 'src/model/laboratoire';
@Component({
  selector: 'app-essai-cyto',
  templateUrl: './essai-cyto.component.html',
  styleUrls: ['./essai-cyto.component.css']
})
export class EssaiCytoComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  //@Output() eventFromEssai:EventEmitter<Cytogenetique>=new EventEmitter<Cytogenetique>();

  @Input('etudeCytoUpd1') etudeCytoUpd1: Cytogenetique | undefined;

  cytogenetique!: Cytogenetique ;

  laboratoires$!: Observable<Laboratoire[]>;

  lymphoTab = ['Faite', 'NonFaite'];

  agentPortantTab = ['Non', 'MMC', 'DEB'];

  instabiliteTab = ['Oui', 'Non'];

  irTab = ['Oui', 'Non'];

  var!:number;

  f=false;

  date1 = new FormControl(new Date());
  date2 = new FormControl(new Date());


  constructor(private laboratoireService: LaboratoireService) {

    this.cytogenetique={dateSang:this.date1.value,
      dateMoelle : this.date2.value,lymphocytes : 'NonFaite',
      agentPortant : 'Non',instabilite : 'Non',
      instabilitePourcentage : 0,ir : 'Non',irPourcentage : 0,
      moelle : 'NonFaite',resultatMoelle : ''}//,idLaboratoire:this.var}

   }

  ngDoCheck(): void {


  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur=changes.etudeCytoUpd1.previousValue;
    const currentValue=changes.etudeCytoUpd1.currentValue;

    if (derniereValeur==undefined  && currentValue!=undefined){

     this.cytogenetique=currentValue;

     this.f=true;

    }

    /*const derniereValeur1=changes.cytogenetique.previousValue;
    const currentValue1=changes.cytogenetique.currentValue;
    if ((derniereValeur1!=currentValue1) || ((derniereValeur1==undefined) && (currentValue1!=undefined))){
      this.pushEvent();
      console.log("bbbbbbbbbbb");
     }*/
  }

  ngOnInit(): void {

    this.getAlllaboratoires();

    this.laboratoireService.getAllLaboratoires().subscribe(data => {
      if (this.f==false){

        this.cytogenetique.idLaboratoire=data[0].id;

      }
    });


  }

  /*pushEvent(){
    this.eventFromEssai.emit(this.cytogenetique);
  }*/





  /*saveCytoInformations(){
    return this.cytogenetique;
  }*/

  getAlllaboratoires() {

    this.laboratoires$ = this.laboratoireService.getAllLaboratoires().pipe(map(data => {
      console.log(data); return data
    }));

  }

}

