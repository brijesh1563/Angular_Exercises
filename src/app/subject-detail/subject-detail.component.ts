import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-subject-detail',
  template: `
    <h3>Department id is : {{departmentId}}</h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: [
  ]
})
export class SubjectDetailComponent implements OnInit {
   public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.departmentId = id;
  }

goPrevious(){
let previousId = this.departmentId - 1
this.router.navigate(['/department', previousId])
}

goNext(){
  let previousId = this.departmentId + 1
  this.router.navigate(['/department', previousId])
}

}
