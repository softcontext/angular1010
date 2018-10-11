import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentDetailComponent } from './experiments/experiment-detail/experiment-detail.component';

import { StateService } from './common/state.service';
import { ExperimentsService } from './common/experiments.service';

// 클라이언트 사이드 라우팅 설정
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experiments', component: ExperimentsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

// 모듈 선언 데코레이터
@NgModule({
  imports: [ // 사용할 다른 모듈을 설정
    BrowserModule,  // 브라우저 연동 모듈
    CommonModule,  // 공통 유틸 모듈: ngIf, ngFor
    HttpModule,  // 비동기 통신 모듈
    FormsModule, // 사용자로부터 데이터를 받아서 처리하는 모듈
    RouterModule.forRoot(appRoutes) // 클라이언트 사이드 라우팅 처리 모듈
  ],
  declarations: [ // 화면처리기술 등록: Component, Pipe, Directive
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperimentsComponent, ExperimentDetailComponent
  ],
  providers: [ // 공용 로직 등록: Service(Guard), Singleton으로 관리 됨
    ExperimentsService,
    StateService
  ],
  bootstrap: [AppComponent] // 기동 컴포넌트(Root Component) 지정
})
export class AppModule { }
