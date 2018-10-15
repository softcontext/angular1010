import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  template: `
    <p>
      c works!
    </p>
    <h3>{{clicked}}</h3>
    <button (myClick)="clicked=$event">클릭</button>
  `,
  styles: []
})
export class CComponent implements OnInit {
  clicked: any = "버튼을 선택해주세요";

  constructor() { }

  ngOnInit() {
  }

}
