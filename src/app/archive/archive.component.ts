import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archiveData:any[]=[];
  showBtn:boolean = true;

  constructor(_RequestsService:RequestsService) {
    _RequestsService.archiveData().subscribe((response)=>{
      this.archiveData = response.data;
    })
   }

   toggle(){
     if (this.archiveData == null){
       this.showBtn = false;
     }
   }

  ngOnInit(): void {
  }

}
