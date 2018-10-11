import { Component } from '@angular/core';

// 모든 컴포넌트는 개별적인 HTML 파일과 CSS 파일을 갖는다.
// CSS 파일의 디자인은 해당 컴포넌트의 HTML 엘리먼트에만
// 영향을 줍니다.
@Component({
  selector: 'app-root', // 커스텀 태그명 문자열
  templateUrl: './app.component.html', // HTML 화면 구성
  styleUrls: ['./app.component.css'] // CSS 디자인 적용
})
export class AppComponent {} // 변수, 로직(이벤트 함수) 담당
