import { Component, OnInit } from '@angular/core';
import { UserService } from './../user/user.service';


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

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }
  save(){
    let registerUser = this._userService.register(this.user);
    registerUser.subscribe(auth => {
      console.log('auth');
      console.log(auth);
    });
  }

}
