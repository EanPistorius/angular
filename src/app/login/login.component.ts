import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../services/apirequests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApirequestsService) { }

  ngOnInit(): void {}

  login(){
    const user ={
      username: 'ean',
      password: '1234'
    }
    this.api.signIn(user).subscribe(res =>{
      console.log(res);
    },
    err => {
      console.log(err);
    })
  }

}
