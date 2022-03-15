import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganismeRoutingModule } from './organisme-routing.module';
import { OrganismeDialogComponent } from './organisme-dialog/organisme-dialog.component';
import { OrganismeDtDialogComponent } from './organisme-dt-dialog/organisme-dt-dialog.component';
import { OrganismeComponent } from './organisme.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    OrganismeComponent ,
    OrganismeDialogComponent,
    OrganismeDtDialogComponent
  ],
  imports: [
    CommonModule,
    OrganismeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule

  ]
})
export class OrganismeModule { }
