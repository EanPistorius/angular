import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private auth:AuthService) {}
  ngOnInit(): void {}
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.auth.login(this.formGroup.value).subscribe(result => {
        if(result.success){
          console.log(result);
          alert(result.success)
        }else{
          alert(result.message)
        }
      })
    }
  }

}
