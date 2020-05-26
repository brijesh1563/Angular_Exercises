import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

registerUserData = {}



  constructor(private _auth: AuthService, private _router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // registrationForm = this.fb.group({
  //   email: ['', [Validators.required]],
  //   password: ['', [Validators.required, Validators.minLength(6)]],
  // })

  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          // localStorage.setItem('token',res.token)
          alert('Registered Successfully..!!')
          this._router.navigate(['/login'])
          console.log(this.registerUserData)
        },
        err => console.log(err)
      )
  }

}
