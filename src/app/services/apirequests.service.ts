import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirequestsService {

  constructor(private httpClient: HttpClient) { }


  private urlAPI = 'http://localhost:8000';

  sendTestGetRequest(): Observable<any> {
    return this.httpClient.get<any>(this.urlAPI+'/info');

  }

  signIn(cred: any): Observable<any>{
    return this.httpClient.post<any>(this.urlAPI+'/api/login', {cred})
  }

  sendInfo(info: any): Observable<any>{
    return this.httpClient.post<any>(this.urlAPI+'/newInfo', {info});
  }

}
