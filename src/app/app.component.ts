import { Component } from '@angular/core';
import { ApirequestsService } from './services/apirequests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  msg!: string;

  constructor(public api: ApirequestsService){
  }


  clickEvent(){
    this.api.sendTestGetRequest();
    this.msg = 'Button is Clicked';
    return this.msg;
  }
}


