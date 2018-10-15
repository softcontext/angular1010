import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyResolveGuard implements Resolve<any> {

  // A ==Resolve==> B
  // B 컴포넌트에게 전달하고자 하는 데이터를 찾거나
  // 가공하는 목적의 로직을 배치
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    console.log('MyResolveGuard');
    console.log("next.params['id']");
    console.log(next.params['id']);
    console.log("next.paramMap.get('id')")
    console.log(next.paramMap.get('id'));

    return { data: 'Hello World!' };
  }
}
