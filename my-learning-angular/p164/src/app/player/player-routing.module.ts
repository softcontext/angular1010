import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './player.component';

// 루트 모듈의 라우팅 설정:
// { path: 'lazy/player', loadChildren: '../app/player/player.module#PlayerModule' }
// URL 문자열이 lazy/player 일 때, player.module 모듈을 생성한다.
// player.module 모듈안에 존재하는 다수의 컴포넌트 중 디폴트로 배치할 컴포넌트를
// 설정하기 위하여 다음 설정이 필요합니다.
// { path: '', component: PlayerComponent }

const routes: Routes = [
  { path: '', component: PlayerComponent },
  { path: 'player', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
// exports: [RouterModule]
// PlayerModule 에서 PlayerRoutingModule 을 임포트하면
// PlayerRoutingModule 이 exports 하는 모듈까지
// 사용할 수 있게 됩니다.

// 루트 모듈에서 라우팅 로직을 건네 줄 때는,
// RouterModule.forRoot(routes) 함수를 사용합니다.
// 기능 모듈에서 라우팅 로직을 건네 줄 때는,
// RouterModule.forChild(routes) 함수를 사용합니다.
// 루트 모듈에서 타 모듈을 임포트하게 되면
// 타 모듈의 라우팅 로직까지 같이 임포트 처리가 됩니다.
