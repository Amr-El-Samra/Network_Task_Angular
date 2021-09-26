import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  
  id:any;
  constructor(public _RequestsService:RequestsService, public _ActivatedRoute:ActivatedRoute, public _Router:Router) {
    this.id = _ActivatedRoute.snapshot.paramMap.get("id");
    _RequestsService.deleteBook(this.id).subscribe((data)=>{
      _Router.navigateByUrl("/archive");
    })
   }

  ngOnInit(): void {
  }

}
