import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
    <p>{{txt}}</p>
    <p>{{txt | reverse}}</p>
  `,
  styles: []
})
export class SignupComponent implements OnInit {
  txt: string = 'hello';

  constructor() { }

  ngOnInit() {
  }

}
