import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { ChartDemoComponent } from './components/chart-demo.component';
import { NyDataService } from './services/ny-data.service';

@NgModule({
    declarations: [AppComponent, ChartDemoComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxChartsModule,
        HttpClientModule
    ],
    providers: [NyDataService],
    bootstrap: [AppComponent]
})
export class AppModule {}
