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

  sendInfo(newInfo: any): Observable<any>{
    return this.httpClient.post<any>(this.urlAPI+'/newInfo', {newInfo});
  }

}
