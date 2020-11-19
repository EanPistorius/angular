import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../services/apirequests.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private api: ApirequestsService) { }

  ngOnInit(): void {
  }
  onUpload() {
      //this.api.sendTestGetRequest().subscribe((res) => {
       // console.log(res);
      //});

    const info = {
        firstName: "df",
        lastName: "ff",
        email: "gcwehmffeyer@gmail.com",
        phoneNumber: "06fff14633799",
        address: ["23 Gerrffit Maritz", "Dassierand", "Potchefffstroom"]

    }

    this.api.sendInfo(info).subscribe(res => {
        console.log(res);
    },
    err => {
      console.log(err);
    })


    }
}
