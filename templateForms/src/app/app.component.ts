import { Component } from '@angular/core';
import { User } from './user'
import { EnrollmentService } from './enrollment.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateForms';
  userModel = new User('','');

constructor(private _enrollmentservice: EnrollmentService){}

  onSubmit(){
    this._enrollmentservice.enroll(this.userModel)
    .subscribe(
      data => console.log('Success..!!', data),
      error => console.error('Error..!!, error')
    )
  }
}
