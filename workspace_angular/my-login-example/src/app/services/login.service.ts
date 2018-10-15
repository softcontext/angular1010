import { Injectable } from '@angular/core';
import axios from 'axios';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL: string = 'http://localhost:3000/users/';

  // 서비스가 생성자를 통해 DI 받고자 하는 경우,
  // @Injectable 데코레이터는 생략할 수 없습니다.
  constructor(private notifyService: NotifyService) { }

  auth(user): Promise<any> {
    // http://localhost:3000/users/user
    // ==> user 라는 id로 존재하는 사용자 정보를 응답

    // http://localhost:3000/users/user2
    // ==> user2 라는 id는 존재하지 않으므로 빈 정보를 응답

    const self = this;

    return axios.get(this.URL + user.id)
      .then(function(response) {
        console.log('--------1-------');
        console.log(response);

        // 사용자가 존재하므로 로그인 처리가 됬음을
        // 브라우저가 지원하는 저장소에 기록합니다.
        sessionStorage.setItem(
            'currentUser', JSON.stringify(user));

        // 사용자가 로그인상태가 되면
        // 이에 따라서 화면을 변경해야 하는 모든
        // 컴포넌트에게 신호를 보내도록 조치합니다.
        self.notifyService.notifyLogin();
        return response.data;
      });
  }

  logout() {
    sessionStorage.clear();
    this.notifyService.notifyLogout();
  }
}
