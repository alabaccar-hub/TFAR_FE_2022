import { Component, Input, OnInit, DoCheck, OnChanges, SimpleChanges, ViewChild, OnDestroy, ViewChildren, QueryList, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Cytogenetique } from 'src/model/cytogenetique';
import { EssaiCytoComponent } from './essai-cyto/essai-cyto.component';

@Component({
  selector: 'fiche2-etude-cyto',
  templateUrl: './etude-cyto.component.html',
  styleUrls: ['./etude-cyto.component.css']
})
export class EtudeCytoComponent implements OnInit,DoCheck,OnDestroy,AfterViewChecked {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  @Input('etudeCytoUpd') etudeCytoUpd: Array<Cytogenetique> | undefined;

  @ViewChildren(EssaiCytoComponent) essaiCytoRef!: QueryList<EssaiCytoComponent>;

  tabCyto:Array<Cytogenetique>=[];

  cyto1!:Cytogenetique;

  cyto2!:Cytogenetique;

  cyto3!:Cytogenetique;

  cyto4!:Cytogenetique;



  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    const derniereValeur=changes.etudeCytoUpd.previousValue;
    const currentValue=changes.etudeCytoUpd.currentValue;

    if (derniereValeur==undefined  && currentValue!=undefined){

      this.tabCyto=currentValue;
      this.cyto1=this.tabCyto[0];
      this.cyto2=this.tabCyto[1];
      this.cyto3=this.tabCyto[2];
      this.cyto4=this.tabCyto[3];


    }}






  constructor() {


   }
  ngAfterViewChecked(): void {

    this.tabCyto=[];

    this.essaiCytoRef.toArray().forEach(element=>{
        this.tabCyto.push(element.cytogenetique);

      //console.log('AfterViewChecked1',element.cytogenetique)

    });




  }
  ngOnDestroy(): void {
    console.log('fin mmm',this.tabCyto);
  }

  ngDoCheck(): void {


  }




  ngOnInit(): void {



  }



  saveCytoInformations(){
    return this.tabCyto;
  }}



