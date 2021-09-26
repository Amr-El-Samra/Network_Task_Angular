import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(public _HttpClient:HttpClient) { }

  getData():Observable<any>{
    return this._HttpClient.get("http://localhost:8000/api/books");
  }

  archiveData():Observable<any>{
    return this._HttpClient.get("http://localhost:8000/api/books/archive");
  }

  getcatDetails():Observable<any>{
    return this._HttpClient.get("http://localhost:8000/api/books/catdetails")
  }

  getauthDetails():Observable<any>{
    return this._HttpClient.get("http://localhost:8000/api/books/authdetails")
  }

  addedData(addedValues:any):Observable<any>{
    return this._HttpClient.post("http://localhost:8000/api/books", addedValues)
  }

  editData(id:any, editValues:any):Observable<any>{
    return this._HttpClient.post(`http://localhost:8000/api/books/update/${id}`, editValues)
  }

  getDetailsBook(id:any):Observable<any>{
    return this._HttpClient.get(`http://localhost:8000/api/books/show/${id}`)
  }

  deleteBook(id:any):Observable<any>{
    return this._HttpClient.get(`http://localhost:8000/api/books/delete/${id}`)
  }

  restoreBook(id:any):Observable<any>{
    return this._HttpClient.get(`http://localhost:8000/api/books/restore/${id}`)
  }
}
