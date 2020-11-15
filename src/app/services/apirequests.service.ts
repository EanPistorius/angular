import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirequestsService {

  constructor(private httpClient: HttpClient) { }


  private urlAPI = 'http://localhost:8080';

  sendTestGetRequest(): void {
    this.httpClient.get(this.urlAPI).subscribe((res) => {
      console.log(res);
    });

  }

}
