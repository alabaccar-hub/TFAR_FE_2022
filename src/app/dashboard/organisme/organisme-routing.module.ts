import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganismeComponent } from './organisme.component';
const routes: Routes = [{path:'',component:OrganismeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganismeRoutingModule { }
