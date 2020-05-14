import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-exa',
  templateUrl: './pipe-exa.component.html',
  styleUrls: ['./pipe-exa.component.css']
})
export class PipeExaComponent implements OnInit {

employees: any = [
  {
    name: 'Brijesh',
    age: 22,
    gen: 'Male'
  },
  {
    name: 'Rumit',
    age: 21,
    gen: 'Male'
  },
  {
    name: 'Gaurav',
    age: 25,
    gen: 'Male'
  },
  {
    name: 'Pranav',
    age: 21,
    gen: 'Male'
  },
  {
    name: 'Manav',
    age: 20,
    gen: 'Male'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
