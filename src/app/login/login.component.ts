import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApirequestsService } from '../services/apirequests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({});
  constructor(private api: ApirequestsService) {
   }

  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.formGroup= new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  login(){
    const user ={
      username: 'ean',
      password: '1234'
    }
    this.api.login(user).subscribe(res =>{
      console.log(res);
    },
    err => {
      console.log(err);
    })
  }
}
