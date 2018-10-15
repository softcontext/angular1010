import { Component, OnChanges, OnInit,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
  `,
  styles: []
})
export class ChildComponent implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() key;

    @Input()
    set number(value: number) {
      console.log('count =', value);
    }

    constructor() {
      console.log(">>>> 0. ChildComponent # constructor() called.");
      console.log('this.key =', this.key); // 사용불가
    }

    // 외부로부터 데이터를 받을 때마다 기동합니다.
    ngOnChanges(changes: SimpleChanges) {
      console.log(">>>> 1. event 1 : ngOnChanges");
      console.log(JSON.stringify(changes));
      // {
      //   "key":{"currentValue":"value","firstChange":true},
      //   "number":{"currentValue":0,"firstChange":true}
      // }

      // {"number":{"previousValue":0,"currentValue":1,"firstChange":false}}

      console.log('this.key =', this.key); // 사용가능
    }
    ngOnInit() {
      console.log(">>>> 2. init 1 : ngOnInit");
      console.log('this.key =', this.key); // 사용가능
    }
    ngDoCheck() {
      console.log(">>>> 3. status 1 : ngDoCheck");
    }
    ngAfterContentInit() {
      console.log(">>>> 4. init 2 : ngAfterContentInit");
    }
    ngAfterContentChecked() {
      console.log(">>>> 5. status 2 : ngAfterContentChecked");
    }
    ngAfterViewInit() {
      console.log(">>>> 6. init 3 : ngAfterViewInit");
    }
    ngAfterViewChecked() {
      console.log(">>>> 7. status 3 : ngAfterViewChecked");
    }
    ngOnDestroy() {
      console.log(">>>> 8. event 2 : ngOnDestroy");
    }

}
