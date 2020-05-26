


import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl, FormGroup, FormArray } from '@angular/forms'
import { forbiddenNameValidator } from './shared/user-name.validator'
import { PasswordValidator } from './shared/password.validator'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  topicsArray: any = ['Angular', 'React', 'Node', 'Javascript']
  // Data: Array<any> = [
  //   { name: 'Node', value: 'node' },
  //   { name: 'React', value: 'react' },
  //   { name: 'Angular', value: 'angular' },
   
  // ];

  registrationForm: FormGroup;

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get hobbies() {
    return this.registrationForm.get('hobbies') as FormArray
  }

  get gender() {
    return this.registrationForm.get('gender')
  }
  get contact() {
    return this.registrationForm.get('contact');
  }


  get topics() {
    return this.registrationForm.get('topics');
  }
  // get checkbox() {
  //   return this.registrationForm.get('checkbox');
  // }

  // get hobby() {
  //   return this.registrationForm.get('hobbies') as FormArray
  // }

  // addHobbies() {
  //   this.hobbies.push(this.fb.control(''));
  // }
  addHobbies(arr?: any[]) {
    if (arr) 
    {
      this.hobbies.push(this.fb.control(arr));
      console.log("dhairya")
    
      } 
       else 
    {
      this.hobbies.push(this.fb.control(''));
      console.log("shah")
  }
  }
  showHide() {
    const data = JSON.parse(localStorage.getItem('key'))
  if(data)
  return false
  return true
  }

  removeHobbies(i) {
    this.hobbies.removeAt(i);
  }

  changeTopic(e) {
    console.log(e.value)
    this.topicsArray.setValue(e.target.value, {
      onlySelf: true
    })
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      contact: ['',[Validators.required, Validators.minLength(10)]],
      password: [''],
      hobbies: this.fb.array([]),
      gender: ['',Validators.required],
      interest: [''],
      interest1: [''],
      interest2: [''],
      // checkArray: this.fb.array([], [Validators.required]),
      topics: ['', [Validators.required]],
    }, {validator: PasswordValidator});
        
  }
  // onCheckboxChange(e) {
  //   const checkArray: FormArray = this.registrationForm.get('checkArray') as FormArray;

  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item: FormControl) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  loadApiData() {
    const editData = JSON.parse(localStorage.getItem('key'))
    if(editData) {
    // this.registrationForm.patchValue({
    //   userName: editData.userName,
    //   email: editData.email,
    //   contact: editData.contact,
    //   hobbies: editData.hobbies,
    //   gender: editData.gender,
    //   topics: editData.topics,
    this.registrationForm.patchValue(editData);
    editData.hobbies.forEach(data => 
      {
        this.addHobbies(data)
        console.log(data)
        
      });
      // this.registrationForm.patchValue(editData);
      // editData.checkbox.foreach(data=>
      //   {
      //     this.onCheckboxChange(data)
      //   })

      // confirmPassword: 'test',
      
    
  }
  }
  onSubmit() {
    console.log(this.registrationForm.value)
    if(this.registrationForm.invalid)
    {
      this.registrationForm.get('userName').markAsTouched();
      this.registrationForm.get('email').markAsTouched();
      this.registrationForm.get('contact').markAsTouched();
      this.registrationForm.get('hobbies').markAsTouched();
      this.registrationForm.get('gender').markAsTouched();
    }
    else{
    localStorage.setItem('key',JSON.stringify(this.registrationForm.value))
    }
  }

}





// if (this.myformGroup.invalid) {
//   this.myformGroup.get('firstName').markAsTouched();
//   this.myformGroup.get('surname').markAsTouched();
//   return;
// }



// this.registrationForm.get('subscribe').valueChanges
    //     .subscribe(checkedValue => {
    //       const email = this.registrationForm.get('email');
    //       if(checkedValue) {
    //         email.setValidators(Validators.required);
    //       } else {
    //         email.clearValidators();
    //       }
    //       email.updateValueAndValidity();
    //     })


     // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

      // subscribe: [false],

   // confirmPassword: [''],
      // address: this.fb.group({
      //   city: [''],
      //   state: [''],
      //   postalCode: ['',[Validators.required]]
      // }),
