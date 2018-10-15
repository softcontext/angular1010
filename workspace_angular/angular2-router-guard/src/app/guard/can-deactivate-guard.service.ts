import { Injectable } from '@angular/core';
import { CanDeactivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Child1Component } from '../child1/child1.component';

// export interface CanComponentDeactivate {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<Child1Component>{

  constructor(private router: Router) { }

  canDeactivate(
    component: Child1Component,
    currentRoute: ActivatedRouteSnapshot,
    // currentState: RouterStateSnapshot,
    // nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log(component);
    if (component && (component.isSaved === false && component.data === undefined)) {
        console.log('사용자가 입력한 데이터가 저장 처리되지 않았습니다.');
    }

    console.log('CanDeactivateGuardService.canDeactivate() called');
    // true를 리턴하면 컴포넌트 파괴되고 화면이 변경됩니다.
    // false를 리턴하면 컴포넌트 변경작업이 취소됩니다.
    return window.confirm("화면이 전환되면 저장되지 않은 상태정보는 손실됩니다."+
      "\n경로를 변경하시겠습니까?");
  }
}
