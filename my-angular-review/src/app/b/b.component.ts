import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-b',
  template: `
    <p>b works!</p>
    <p>{{isOk}}</p>
    <button (click)="isOk=!isOk">Click</button>
    <button (click)="change()">Click</button>
    <br>
    <img *ngIf="isOk" src="assets/google.png" width="30%">
    <br>
    <input type="text" value="123" id="target" #target>
    <button (click)="show(event, this, $event, $this)">Click</button>
  `,
  styles: []
})
export class BComponent implements OnInit {
  isOk: boolean = false;
  @ViewChild('target') target: ElementRef;

  constructor() { }

  ngOnInit() {}

  change() {
    this.isOk=!this.isOk;
  }

  show(e, t, $e, $t) {
    console.log(e); // undefined
    console.log(t); // 가능은 하나 버튼이 아니고 BComponent {isOk: false} 객체다.
    // console.log(e.target === t);

    // 순수 자바스크립트 코드 사용이 가능합니다.
    // console.log(document.getElementById('target').value); // 123
    console.log('>>', this.target.nativeElement.value);

    console.log($e);
    // MouseEvent ==> 순수 자바스크립트에서 사용하던 event 대신 $event를 사용한다.
    console.log($t); // undefined
    console.log($e.target); // button
  }
}
