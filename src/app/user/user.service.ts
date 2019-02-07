import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUri = "https://recrutamento-praxio.azurewebsites.net/Api";
  auth(user){
    return this.http.post(this.baseUri + '/Authorization', user, httpOptions);
  }
  register(user){
    return this.http.post(this.baseUri + '/Usuario',user);
  }
}
