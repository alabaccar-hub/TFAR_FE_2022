import { DepartementModule } from './departement/departement.module';
import { FicheModule } from './fiche/fiche.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganismeModule } from 'src/app/dashboard/organisme/organisme.module';
import { Fiche2Module } from 'src/app/dashboard/fiche2/fiche2.module';
import { UserModule } from 'src/app/dashboard/user/user.module';
const routes: Routes = [{path:'', component:DashboardComponent ,children: [{
  path: 'organisme',
  loadChildren: () =>
    import('src/app/dashboard/organisme/organisme.module').then((m) => OrganismeModule)
},
{
  path: 'departement',
  loadChildren: () =>
    import('src/app/dashboard/departement/departement.module').then((m) => DepartementModule)
}
,
{
  path: 'user',
  loadChildren: () =>
    import('src/app/dashboard/user/user.module').then((m) => UserModule)
}
,
{
  path: 'fiche',
  loadChildren: () =>
    import('src/app/dashboard/fiche/fiche.module').then((m) => FicheModule)
}
,
{
  path: 'fiche2',
  loadChildren: () =>
    import('src/app/dashboard/fiche2/fiche2.module').then((m) => Fiche2Module)
},

{ path: '', pathMatch: 'full', redirectTo: 'hopital' }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
