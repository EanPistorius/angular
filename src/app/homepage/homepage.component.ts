import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../services/apirequests.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private api: ApirequestsService) {
   }

  ngOnInit(): void {
  }

  private file: any;
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);
    }
  }

  onUpload(){
   this.api.sendInfo(this.file).subscribe(res =>{
    alert('Uploaded Successfully.');
   })

  }
}
