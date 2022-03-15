import { Injectable } from '@angular/core';
import { Fiche } from 'src/model/fiche';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fiche2Service {
  private subject = new Subject<Fiche>();
  constructor() { }
  sendFiche(fiche: Fiche) {
    this.subject.next(fiche);
  }

  receivedFiche(): Observable<Fiche> {
    return this.subject.asObservable();
  }
}
