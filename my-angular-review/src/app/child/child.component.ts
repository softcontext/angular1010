import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
    <p>
      {{data}}
    </p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {
  @Input('fromParent') data;
  @Output() fromChild = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.fromChild.emit('I am your child!');
  }

}
