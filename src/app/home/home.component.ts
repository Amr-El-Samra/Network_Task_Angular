import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any[]=[];
  id:any;

  constructor(public _RequestsService:RequestsService, public _Router:Router) { 
    _RequestsService.getData().subscribe((response)=>{
      this.data=response.data;
      for(let i=0; i<this.data.length; i++){
        this.id = this.data[i].id;
      }
    })
  }

  delete(){
    this._Router.navigateByUrl(`/delete/${this.id}`);
    $('#delete').modal('hide');
  }

  ngOnInit(): void {
  }

}
