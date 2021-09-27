import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
declare var $:any;

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archiveData:any[]=[];
  id:any;


  constructor(_RequestsService:RequestsService, public _Router:Router) {
    _RequestsService.archiveData().subscribe((response)=>{
      this.archiveData = response.data;
      for(let i=0; i<this.archiveData.length; i++){
        this.id = this.archiveData[i].id;
      }
    })
   }

   restore(){
    this._Router.navigateByUrl(`/restore/${this.id}`);
    $('#restore').modal('hide');
  }



  ngOnInit(): void {
  }

}
