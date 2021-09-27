import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id:any;
  bookDetails:any={};
  constructor(public _RequestsService:RequestsService, public _ActivatedRoute:ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.paramMap.get("id");
    _RequestsService.getDetailsBook(this.id).subscribe((response)=>{
      this.bookDetails = response?.data;
      // console.log(this.bookDetails);
    })
   }

  ngOnInit(): void {
  }

}
