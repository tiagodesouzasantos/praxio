import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../user/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {"email":"","senha":""};
  
  constructor(
    private _userService:UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  submit(){
    let userAuth = this._userService.auth(this.login);
    let _this = this;
    userAuth.subscribe(auth=>{
      if(auth.success){
        let authResult = btoa(JSON.stringify(auth));
        sessionStorage.setItem('login', authResult);
        _this.router.navigate(['/home']);
      }else{
        console.log(auth.message);
        sessionStorage.clear();
      }
    });
  }
}
