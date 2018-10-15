import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  template: `
    <input type="text" value="greeting">
    <input type="text" [value]="greeting">
    <input type="text" [value]="'greeting'">
    <input type="text" bind-value="greeting">
  `,
  styles: [
    `
      p {
        color: red;
      }
    `
  ],
  providers: []
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
