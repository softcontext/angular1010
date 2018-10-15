import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private subject = new Subject<any>();

  constructor() { }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  notifyLogin() {
    const user = sessionStorage.getItem('currentUser');

    this.subject.next({
      login: true,
      user: JSON.parse(user)
    });
  }

  notifyLogout() {
    this.subject.next({ login: false });
  }
}
