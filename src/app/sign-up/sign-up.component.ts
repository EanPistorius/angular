import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApirequestsService } from '../services/apirequests.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formGroup = new FormGroup({});

  constructor(private api: ApirequestsService) { }


  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.formGroup= new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })

  }
  submit(){
    console.log(this.formGroup.value)
    if(this.formGroup.valid){
      this.api.signUp(this.formGroup.value).subscribe(res=>{
        if(res.success){
          console.log(res)
          alert(res.message)
        }else{
          alert(res.message)
        }

      })
    }
  }
}
