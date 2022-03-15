import { Cytogenetique } from './../../model/cytogenetique';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EtudeCytoService {
  private subject = new Subject<Cytogenetique | undefined>();
  constructor() { }
  sendCytogenetique(Cytogenetique: Cytogenetique | undefined) {
    this.subject.next(Cytogenetique);
  }

  receivedCytogenetique(): Observable<Cytogenetique | undefined> {
    return this.subject.asObservable();
  }
}
