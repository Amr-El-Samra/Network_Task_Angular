import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css']
})
export class RestoreComponent implements OnInit {

  id:any;
  constructor(public _RequestsService:RequestsService, public _ActivatedRoute:ActivatedRoute, public _Router:Router) {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id");
    this._RequestsService.restoreBook(this.id).subscribe((data)=>{
      this._Router.navigateByUrl("/home");
    })
   }

  ngOnInit(): void {
  }

}
