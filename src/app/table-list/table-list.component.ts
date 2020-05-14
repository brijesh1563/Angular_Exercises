import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  template: `<div>
  <br><br><br><br>

<table class="data">
<thead>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>DOB</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let detail of details">
          <td>{{detail.name}}</td>
          <td>{{detail.age}}</td>
          <td>{{detail.dob}}</td>
    </tr>
    </tbody>
</table> 

  </div>`,

  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



public details =  [
  {
    name: 'Brijesh',
    age: 22,
    dob: "September-1997"
  },
  {
    name: 'Rumit',
    age: 21,
    dob: "July-1998"
  },
  {
    name: 'Gaurav',
    age: 25,
    dob: "July-1995"
  },
  {
    name: 'Prachi',
    age: 21,
    dob: "April-1998"
  },
  {
    name: 'Maitri',
    age: 20,
    dob: "August-1999"
  },
];

}
