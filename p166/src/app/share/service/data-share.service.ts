import { Injectable } from '@angular/core';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class DataShareService {
  message: string = 'Welcome';

  constructor() { }

  getMessage(): string {
    return this.message;
  }
}
