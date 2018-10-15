import {
  Component, OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  template: `
    <h3>parent.component</h3>
    <app-child [key]="'value'" [number]="count" *ngIf="showChild"></app-child>

    <button (click)="showChild=!showChild">Toggle</button>
    <br>
    <input type="text" [(ngModel)]="txt">
    <br>
    {{count}} <button (click)="count=count+1">Increase</button>
  `,
  styles: []
})
export class ParentComponent implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  count: number = 0;
  txt: number = 123;
  showChild: boolean = true;

  constructor(private route: ActivatedRoute) {
    console.log("0. ParentComponent # constructor() called.");
  }

  ngOnChanges(changes) { // 외부로부터 데이터를 받을 때만 조건 기동
    console.log("1. event 1 : ngOnChanges");
    console.log(changes);
  }
  ngOnInit() {
    console.log("2. init 1 : ngOnInit");
    this.route.data.subscribe(v => console.log(v));
  }
  ngDoCheck() {
    console.log("3. status 1 : ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("4. init 2 : ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("5. status 2 : ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("6. init 3 : ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("7. status 3 : ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("8. event 2 : ngOnDestroy");
  }
}
