import { Injectable } from '@angular/core';
import { Laboratoire } from './../../model/laboratoire';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaboratoireService {
  private baseUrl = environment.host;
  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY0NjMyMDk0M30.bm2qufUabUwWK5jf1dX1waO-yT8tH1nH9BY59OLiQIB7n5YLsbp_0plAqu7kOuQVqO5gGwjIfPyU8liUsHQh_A";
  headers!: HttpHeaders;


  constructor(private http: HttpClient) {
    console.log(this.auth_token);
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token).set('content-type', 'application/json');
    console.log("salut test ...... ");

   }
   getAllLaboratoires(): Observable<Laboratoire[]>{
    return this.http.get<Laboratoire[]>(this.baseUrl+"/api/laboratoires/findAll", { headers: this.headers });
  }
}
