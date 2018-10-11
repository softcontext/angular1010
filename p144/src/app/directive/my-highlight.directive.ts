import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

// selector: 'appMyHighlight' ==> 커스텀 태그처럼 사용
// selector: '[appMyHighlight]' ==> 커스텀 속성처럼 사용
@Directive({
  selector: '[myHighlight]'
})
export class MyHighlightDirective {

  constructor(
    private el: ElementRef, // 디렉티브가 설정된 타겟 엘리먼트를 가리키는 엘리먼트 객체
    private renderer: Renderer // 엘리먼트를 조작할 때 사용하는 객체
  ) { }

  // 타겟 엘리먼트의 해당 이벤트가 발생하면 함수를 기동시킨다.
  @HostListener('focus')
  onFocus() {
    // style="background: yellow"
    this.renderer.setElementStyle(this.el.nativeElement,
      'background', 'yellow');
  }

  @HostListener('blur')
  onBlur() {
    // style="background: white"
    this.renderer.setElementStyle(this.el.nativeElement,
      'background', 'white');
  }

}
