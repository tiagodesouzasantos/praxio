import { Component, OnInit } from '@angular/core';
import { UserService } from './../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // alert('asdasd');
  }

  submit(user){
    console.log(user);
    alert('asdasd');
    return false;
  }
}
