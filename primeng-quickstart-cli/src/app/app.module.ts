import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';

import { AppComponent } from './app.component';
import { PieChartDemoComponent } from './pie-chart-demo/pie-chart-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        PieChartDemoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,

        ChartModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
