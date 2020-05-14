import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <p>
     Email: cmpica@charusat.ac.in <br/>
     Contact: 32145690
    </p>
    <p>
     Email: depstar@charusat.ac.in <br/>
     Contact: 45482690
    </p>
    <p>
     Email: cit@charusat.ac.in <br/>
     Contact: 48385690
    </p>
    <p>
     Email: civil@charusat.ac.in <br/>
     Contact: 32185690
    </p>
    <p>
     Email: rpcp@charusat.ac.in <br/>
     Contact: 32144618
    </p>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
