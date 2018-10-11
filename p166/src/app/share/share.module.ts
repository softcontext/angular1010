import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ReversePipe } from './pipe/reverse.pipe';
import { DataShareService } from './service/data-share.service';

@NgModule({
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  declarations: [ReversePipe],
  providers: [DataShareService],
  exports: [ReversePipe]
})
export class ShareModule { }
// 화면 처리 기술은 exports 항목에 등록해야 다른 모듈에서
// 사용할 수 있지만, 공유 로직인 서비스는 자동으로 export
// 처리가 됩니다.
