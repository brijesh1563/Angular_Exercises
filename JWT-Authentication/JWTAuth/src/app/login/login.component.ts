import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  public error = [];

   handleResponse(res) {
    console.log(res);
    // this.token.handleToken(data.data.accessToken);
    if (res.code === 'SUCCESS') {
      this._router.navigateByUrl('/special');
      }
    }

    handleError(code) {
    this.error = code.res;
      console.log(code.res);
    }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  

loginUser(){
  this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          this.handleResponse(res),
          localStorage.setItem('token',res.token)
          alert('Welcome back..!!')
          this._router.navigate(['/special'])
        },
        err => {
          console.log(err) 
          alert(err.error)    
          }
        )

   

}

}
