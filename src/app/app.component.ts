import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'praxio-test';
  login = sessionStorage.getItem('login');
  constructor(private router: Router) { }
  ngOnInit() {
    if(this.login){
      this.router.navigate(['/home']);
    }
  }
}
