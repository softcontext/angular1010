import { Injectable } from '@angular/core';

// 앵귤러 프레임워크가 서비스 객체를 미리 만들어서
// 모듈 컨테이너에 등록하고 요청받을 때 주입해주는 서비스를
// 제공합니다.
@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class DataShareService {
  data: string = null;

  constructor() { }

  getData(): string {
    return this.data;
  }
  setData(data: string = null): void {
    this.data = data;
  }
}
