import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from '../requests.service';
declare var $:any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  category:any[]=[];
  author:any[]=[];
  file:any=null;
  id:any;
  book:any={};
  bookName:string="";

  constructor(public _RequestsService:RequestsService, public _Router:Router, public _ActivatedRoute:ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.paramMap.get("id");
    _RequestsService.getcatDetails().subscribe((response)=>{
      this.category = response.data;
    })

    _RequestsService.getauthDetails().subscribe((response)=>{
      this.author = response.data;
    })

    _RequestsService.getDetailsBook(this.id).subscribe((response)=>{
      this.book = response.data;
      console.log(this.book);
      this.editForm.controls.name.setValue(this.book.name);
      this.editForm.controls.details.setValue(this.book.details);
      this.editForm.controls.numberOfPages.setValue(this.book.numberOfPages);
      this.editForm.controls.price.setValue(this.book.price);
      this.editForm.controls.cat_id.setValue(this.book.category.id);
      this.editForm.controls.author_id.setValue(this.book.author.id);
    })
   }
  
   

   editForm:FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'details': new FormControl(null, [Validators.required]),
    'numberOfPages': new FormControl(null, [Validators.required]),
    'price': new FormControl(null, [Validators.required]),
    'cover': new FormControl(null),
    'coverName': new FormControl(null, [Validators.required]),
    'cat_id': new FormControl(null, [Validators.required]),
    'author_id': new FormControl(null, [Validators.required]),
  });

  edit(){
    const formData = new FormData();
    Object.entries(this.editForm.value).forEach(
      ([key, value]: any[]) => {
        if(value){
          formData.set(key, value);
        }
      }
    )
    this._RequestsService.editData(this.id,formData).subscribe((data)=>{
      if(data.msg != "Updated Successfully"){
        alert('Problem in Uploading');
        this.editForm.reset();
      }


    })
  }

  onFileChange(e:any){
    this.file = e.target.files[0];
    this.editForm.patchValue({
      cover:this.file
    });
  }

  url(){
    this._Router.navigateByUrl("/home");
    $('#update').modal('hide');
  }

  ngOnInit(): void {
  }

}
