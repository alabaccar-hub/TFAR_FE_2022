import { Component, ViewChild, DoCheck } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FicheComponent } from './fiche/fiche.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  nameOfComp!:any;


  menuItems = ['organisme', 'departement', 'user', 'fiche', 'statistique'];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {

  }



  onActivate(component: any): void {

    this.nameOfComp=component.constructor.name;

    console.log('nom du composant    :   ',this.nameOfComp)

    if (this.nameOfComp=='FicheComponent'){
      console.log('this is the FicheComponent');

    }
  }


}


