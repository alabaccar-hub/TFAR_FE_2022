import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { Fiche2RoutingModule } from './fiche2-routing.module';
import { AndrogeneComponent } from './androgene/androgene.component';
import { BiologieMoleculaireComponent } from './biologie-moleculaire/biologie-moleculaire.component';
import { CirconDeDecouverteComponent } from './circon-de-decouverte/circon-de-decouverte.component';
import { CongelationCellComponent } from './congelation-cell/congelation-cell.component';
import { EtudeCytoComponent } from './etude-cyto/etude-cyto.component';
import { EssaiCytoComponent } from './etude-cyto/essai-cyto/essai-cyto.component';
import { HistoireFamilialeComponent } from './histoire-familiale/histoire-familiale.component';
import { PatientComponent } from './patient/patient.component';
import { ScoreCliniqueComponent } from './score-clinique/score-clinique.component';
import { SignesHemaComponent } from './signes-hema/signes-hema.component';
import { SyndromeMalformatifComponent } from './syndrome-malformatif/syndrome-malformatif.component';
import { TraitementComponent } from './traitement/traitement.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Fiche2Component } from './fiche2.component';

@NgModule({
  declarations: [
    Fiche2Component,
    AndrogeneComponent,
    BiologieMoleculaireComponent,
    CirconDeDecouverteComponent,
    CongelationCellComponent,
    EtudeCytoComponent,
    EssaiCytoComponent,
    HistoireFamilialeComponent,
    PatientComponent,
    ScoreCliniqueComponent,
    SignesHemaComponent,
    SyndromeMalformatifComponent,
    TraitementComponent
  ],
  imports: [
    CommonModule,
    Fiche2RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    
  ],
  
})
export class Fiche2Module { }
