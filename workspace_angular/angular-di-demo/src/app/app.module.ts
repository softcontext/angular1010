import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ValueProviderComponent } from './value-provider/value-provider.component';
import { FactoryProviderComponent } from './factory-provider/factory-provider.component';
import { ClassProviderComponent } from './class-provider/class-provider.component';
import { ClassProviderComponent2 } from './class-provider/class-provider.component2';
import { FactoryComponent } from './factory/factory.component';

import { GlobalErrorHandler } from './service/global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ValueProviderComponent,
    FactoryProviderComponent,
    ClassProviderComponent,
    ClassProviderComponent2,
    FactoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
