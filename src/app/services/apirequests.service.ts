import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirequestsService {

  constructor(private http: HttpClient) { }
  // Cloud hosted API URL
  // private urlAPI = 'http://apiproject2-env.eba-vfyzbtbz.eu-west-2.elasticbeanstalk.com/';
  private urlAPI = 'http://localhost:8000';

  theFile: any;
  sendInfo(file: FileList): Observable<any> {
    let myData = new FormData();
    this.theFile = file;
    myData.append(`file`, this.theFile, this.theFile.name)
    return this.http.post<any>(this.urlAPI+'/uploadFile', myData);
  }
  getUsers(formData: FormData): Observable<any>{
    return this.http.get('/users')
  }

  signUp(cred: any): Observable<any>{
    return this.http.post<any>(this.urlAPI+'/signUp', cred)
  }

  login(cred: any): Observable<any>{
    return this.http.post<any>(this.urlAPI + '/login', {cred});
  }

  /* sendInfo(info: any): Observable<any>{
    return this.http.post<any>(this.urlAPI+'/newInfo', {info});
  } */

}
