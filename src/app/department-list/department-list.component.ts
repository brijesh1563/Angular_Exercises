import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <ul>
      <li>CMPICA</li>
      <li>DEPSTAR</li>
      <li>Computer IT</li>
      <li>Civil</li>
      <li>RPCP</li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
