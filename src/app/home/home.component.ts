import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any[]=[];

  constructor(_RequestsService:RequestsService) { 
    _RequestsService.getData().subscribe((response)=>{
      this.data=response.data;
    })
  }

  ngOnInit(): void {
  }

}
