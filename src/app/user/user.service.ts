import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUri = "https://recrutamento-praxio.azurewebsites.net/Api";
  auth(user){
    return this.http.post(this.baseUri +'/Authorization',user);
  }
  register(user){
    return this.http.post(this.baseUri + '/Usuario',user);
  }
}
