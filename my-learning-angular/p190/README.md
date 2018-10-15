ng g c parent -t -s --spec false
ng g c parent/child -t -s --spec false --flat

parent constructor
  child constructor

p.2 : ngOnInit
p.3 : ngDoCheck
p.4 : ngAfterContentInit
p.5 : ngAfterContentChecked

  c.1 : ngOnChanges <== <app-child [key]="'value'"></app-child>
  c.2 : ngOnInit
  c.3 : ngDoCheck
  c.4 : ngAfterContentInit
  c.5 : ngAfterContentChecked
  c.6 : ngAfterViewInit
  c.7 : ngAfterViewChecked

p.6 : ngAfterViewInit
p.7 : ngAfterViewChecked

****

child 컴포넌트 파괴

p.3 : ngDoCheck
p.5 : ngAfterContentChecked

  c.8 : ngOnDestroy

p.7 : ngAfterViewChecked

****

변경감지 작동: 초기에 1번, 어떤 이벤트가 발생하더라도 다시 체크

p.3 : ngDoCheck
p.5 : ngAfterContentChecked

  c.3 : ngDoCheck
  c.5 : ngAfterContentChecked
  c.7 : ngAfterViewChecked

p.7 : ngAfterViewChecked

***

부모 컴포넌트의 상태정보가 있을 때

parent constructor

p.2 : ngOnInit
p.3 : ngDoCheck
p.4 : ngAfterContentInit
p.5 : ngAfterContentChecked

  child constructor
  c.1 : ngOnChanges <== <app-child [key]="'value'"></app-child>
  c.2 : ngOnInit
  c.3 : ngDoCheck
  c.4 : ngAfterContentInit
  c.5 : ngAfterContentChecked
  c.6 : ngAfterViewInit
  c.7 : ngAfterViewChecked

p.6 : ngAfterViewInit
p.7 : ngAfterViewChecked
