import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { EChartsComponent } from './e-charts/e-charts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';



@NgModule({
  declarations: [
    ApexChartsComponent,
    EChartsComponent,
    ChartjsComponent,
    ChartistComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    FormsModule, ReactiveFormsModule,
    SharedModule,
    NgApexchartsModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ChartistModule
  ]
})
export class ChartModule { }
