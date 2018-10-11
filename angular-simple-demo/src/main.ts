import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 서비스(배포) 모드인가? 현재는 아니다.
if (environment.production) {
  enableProdMode();
}

// 기동 모듈을 지정(Root Module)
platformBrowserDynamic().bootstrapModule(AppModule);
