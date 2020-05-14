import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `<div>
  <input id="unm" type="text" placeholder="Username">
  <input id="pwd" type="text" placeholder="Password">
  <button (click)="login()">Login</button>

  <p>Username: Brijesh and Password: brijesh123</p>
  <p></p>
  
  </div>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login() {
  var unm = ((document.getElementById('unm') as HTMLInputElement).value);
  var pwd = ((document.getElementById('pwd')as HTMLInputElement).value);

  if((unm == "Brijesh") && (pwd == "brijesh123")){
    alert("Welcome "+unm+"..!!")
  }else{
    alert('Incorrect Username or Password..!!')
  }
    
  }

}
