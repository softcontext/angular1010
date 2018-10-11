import { Component, OnInit } from '@angular/core';
import { StateService } from '../common/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body: string = 'This is the about home body';
  message: string;

  // 생성자에 객체는 앵귤러 DI(providers 항목으로 관리하는 서비스 객체들이 대상) 해 줍니다.
  constructor(private _stateService: StateService) { }

  // 라이프 사이클 메소드 중 하나: 컴포넌트가 화면에 표시되기 전에 기동합니다.
  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  // 컴포넌트는 화면에 표시될 때 만들어지고,
  // 화면에서 사라지면 파괴됩니다.
  // 사용자가 입력한 데이터를 보존하기위해서 서비스 객체에게 데이터를 전달합니다.
  updateMessage(m: string): void {
    alert(m);
    this._stateService.setMessage(m);
  }
}
