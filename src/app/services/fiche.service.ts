import { Injectable } from '@angular/core';
import { FicheList } from './../../model/fiche-list';
import { Fiche } from './../../model/fiche';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FicheService {

  private baseUrl = environment.host;
  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY0NjMyMDk0M30.bm2qufUabUwWK5jf1dX1waO-yT8tH1nH9BY59OLiQIB7n5YLsbp_0plAqu7kOuQVqO5gGwjIfPyU8liUsHQh_A";
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    console.log(this.auth_token);
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token).set('content-type', 'application/json');
    console.log("salut test ...... ");
   }

   getAllFiches(): Observable<Fiche[]>{
    return this.http.get<Fiche[]>(this.baseUrl+"/api/fiches/findAll", { headers: this.headers });
  }

  getAllFicheLists(): Observable<FicheList[]>{
    return this.http.get<FicheList[]>(this.baseUrl+"/api/fiches/findAllFicheListDto", { headers: this.headers });
  }

  saveFiche(fiche: Fiche): Observable<Fiche> {
    return this.http.post<Fiche>(this.baseUrl+"/api/fiches/save",fiche,{ headers: this.headers });
  }

  updateFiche(fiche: Fiche): Observable<Fiche> {
    return this.http.put<Fiche>(this.baseUrl+"/api/fiches/save/"+fiche.idFiche,fiche,{ headers: this.headers });
  }

  deleteFiche(fiche: FicheList): Observable<void> {
    return this.http.delete<void>(this.baseUrl+"/api/fiches/delete/"+fiche.idFiche,{ headers: this.headers });
  }

  findFicheById(ficheList: FicheList): Observable<Fiche> {
    return this.http.get<Fiche>(this.baseUrl+"/api/fiches/find/"+ficheList.idFiche,{ headers: this.headers });
  }

  getMF_Patient(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/patients/statSexe", { headers: this.headers });
  }

  getnbre_UIV(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statuiv", { headers: this.headers });
  }

  getnbre_cellu(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statcellularite", { headers: this.headers });
  }

  getnbre_morphologie(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statmorphologie", { headers: this.headers });
  }

}
