import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  template:  `<div>
                <p>Shah</p>

                <!-- Data Binding -->
                <p>{{greetUser()}}</p>
                
                <!-- property binding -->
                <input type="text" id="2"/>

                <!-- Class Binding -->
                <p [class.a]="hasError">Corona Virus</p>
                <p [ngClass]="msgClass">Corona Virus</p>

                <!-- Style Bindings -->
                <p [style.background-color]="'yellow'">Corona Virus</p>
                <p [style.background-color]="hasError ? 'Black' : 'Yellow'">Corona Virus</p>
                <p [ngStyle]="styleBind">Corona Virus</p>

                <!-- Event Binding -->
                <button (click)="alertInfo()">Click</button>
            </div>`,
  styles: [`
    div{
      color: black;
    }
    .a{
      color: red;
    }
    .b {
      color: green
    }
  `]
})
export class BindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name= "Brijesh Shah"
public cls = 'a'
public hasError = false

public msgClass = {
  'a' : this.hasError,
  'b' : !this.hasError
}

public styleBind = {
  color : 'white',
  backgroundColor : 'black'
}

alertInfo() {
  alert('Say Hi.!')
}

 greetUser() {
   return "Hello " + this.name;
 }
}


