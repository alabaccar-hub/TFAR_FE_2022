import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserDtDialogComponent } from './user-dt-dialog/user-dt-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    UserComponent,
    UserDialogComponent,
    UserDtDialogComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class UserModule { }
