import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementDialogComponent } from './departement-dialog/departement-dialog.component';
import { DepartementDtDialogComponent } from './departement-dt-dialog/departement-dt-dialog.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { DepartementComponent } from './departement.component';

@NgModule({
  declarations: [
    DepartementComponent,
    DepartementDialogComponent,
    DepartementDtDialogComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class DepartementModule { }
