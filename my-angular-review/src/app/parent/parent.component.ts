import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>
      parent works!
    </p>
    <p>
      {{data}}
    </p>
    <hr>
    <app-child [fromParent]='"I am your father!"' (fromChild)="data=$event"></app-child>
  `,
  styles: []
})
export class ParentComponent implements OnInit {
  data;

  constructor() { }

  ngOnInit() {
  }

}
