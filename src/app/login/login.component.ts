import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {"email":"","senha":""};
  
  constructor(private _userService:UserService) { }

  ngOnInit() {
  }

  submit(){
    let userAuth = this._userService.auth(this.login);
    userAuth.subscribe(auth=>{
      console.log('auth');
      console.log(auth);
    });
  }
}
