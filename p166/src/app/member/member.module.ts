import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';

import { MemberRoutingModule } from './member-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    ShareModule
  ],
  declarations: [SignupComponent, LoginComponent]
})
export class MemberModule { }
