import { Component, OnInit } from '@angular/core';
import { NotifyService } from './services/notify.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogedin: boolean = false;
  currentUser = undefined;
  // 앵귤러는 디폴트로 HTML Escape가 적용됩니다.
  // tab: string = '&nbsp;&nbsp;';
  tab: string = ' ';

  constructor(
    private notifyService: NotifyService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.notifyService.getObservable()
        .subscribe(data => {
          // { login: true, user: {id:'user', pw:'111'} }
          if (data && data.login) {
              this.isLogedin = true;
              this.currentUser = data.user;
          } else {
            this.isLogedin = false;
          }
        });

    // 사용자가 F5(화면갱신)를
    // 누르면 모듈부터 전부 새로 만들어서 사용하게 된다.
    // 로그인을 한 상태정보를 이 경우에도 반영시키기 위해서
    // 기동 컴포넌트가 사용될 때 단 한번만
    // 상태정보를 조회하여 반영시키도록 합니다.
    if (sessionStorage.getItem('currentUser')) {
      this.notifyService.notifyLogin();
    }
  }

  logout() {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
        this.currentUser = undefined;
        this.loginService.logout();
    }
  }
}
