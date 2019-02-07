import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  login = sessionStorage.getItem('login');
  constructor(private router: Router) { }
  ngOnInit() {
      if (!this.login) {
        this.router.navigate(['/']);
      }
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
