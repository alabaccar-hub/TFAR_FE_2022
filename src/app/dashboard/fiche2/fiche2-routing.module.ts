import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Fiche2Component } from './fiche2.component';
const routes: Routes = [{path:'',component:Fiche2Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fiche2RoutingModule { }
