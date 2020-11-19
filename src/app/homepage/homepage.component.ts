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

  fileData: any = null;

  fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
  }

  onUpload() {
    /*
      this.api.sendTestGetRequest().subscribe((res) => {
       console.log(res);
      });

    const info = {
        firstName: "df",
        lastName: "ff",
        email: "gcwehmffeyer@gmail.com",
        phoneNumber: "06fff14633799",
        address: ["23 Gerrffit Maritz", "Dassierand", "Potchefffstroom"]

    } */
    console.log('HERE');
    const formData = new FormData();
    formData.append('file', this.fileData);

    this.api.sendInfo(formData).subscribe(res => {
        console.log(res);
    },
    err => {
      console.log(err);
    })


    }

}
