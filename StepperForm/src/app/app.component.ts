import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      Name: ['', [Validators.required]]
    });
    this.secondFormGroup = this._formBuilder.group({
      Contact: ['', [Validators.required]]
    });
  }

  getDetail(){
    alert(`Name : ${this.firstFormGroup.value.Name} \nContact : ${this.secondFormGroup.value.Contact}`)
  }

}
