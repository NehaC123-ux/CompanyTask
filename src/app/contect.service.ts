import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icontect } from './Icontect';

@Injectable({
  providedIn: 'root'
})
export class ContectService {
  httpOption={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'accept':'application/json'
    })
  }
  

  constructor(private readonly _http:HttpClient) { }
  getContectList():Observable<Icontect[]>{
    return this._http.get<Icontect[]>("https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile");
  }
  AddNewContact(req:Icontect):Observable<any>{
    return this._http.post<any>("https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile",this.httpOption);
}
}