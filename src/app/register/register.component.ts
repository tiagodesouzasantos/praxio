import { Component, OnInit } from '@angular/core';
import { UserService } from './../user/user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    "nomeRazaoSocial": "",
    "cpfcnpj": "",
    "telefone": "",
    "email": "",
    "senha": "",
    "cep": "",
    "logradouro": "",
    "numero": "",
    "bairro": ""
  };

  constructor(private _userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }
  save(){
    let registerUser = this._userService.register(this.user);
    let _this = this;
    registerUser.subscribe(auth => {
      if (auth.success) {
        _this.router.navigate(['/login']);
      } else {
        console.log(auth.message);
      }
    });
  }

}
