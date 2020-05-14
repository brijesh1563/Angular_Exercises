import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input('parentData') public name;
@Output() childData = new EventEmitter();

child(){
  this.childData.emit("Child data triggered");
}

 }
