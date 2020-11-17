import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { baseURL } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
    return this.http.post(`${baseURL}`, data)
  }
}
