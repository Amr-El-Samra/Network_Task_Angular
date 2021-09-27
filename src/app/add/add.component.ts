import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
declare var $:any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  category:any[]=[];
  author:any[]=[];
  file:any="";


  constructor(public _RequestsService:RequestsService, public _Router:Router) {
    _RequestsService.getcatDetails().subscribe((response)=>{
      this.category = response.data;
    })

    _RequestsService.getauthDetails().subscribe((response)=>{
      this.author = response.data;
    })

   }

  addForm:FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'details': new FormControl(null, [Validators.required]),
    'numberOfPages': new FormControl(null, [Validators.required]),
    'price': new FormControl(null, [Validators.required]),
    'cover': new FormControl(null, [Validators.required]),
    'coverName': new FormControl(null, [Validators.required]),
    'cat_id': new FormControl(null, [Validators.required]),
    'author_id': new FormControl(null, [Validators.required]),
  });

  add(){
    const formData = new FormData();
    Object.entries(this.addForm.value).forEach(
      ([key, value]: any[]) => {
        formData.set(key, value);
      }
    )
    this._RequestsService.addedData(formData).subscribe((data)=>{
      if(data.msg != "Added Successfully"){
        this.addForm.reset();
        // console.log (data);
      }

    })
  }

  onFileChange(e:any){
    this.file = e.target.files[0];
    this.addForm.patchValue({
      cover:this.file
    });
  }

  url(){
    this._Router.navigateByUrl("/home");
    $('#add').modal('hide');
  }

  ngOnInit(): void {
  }

}
