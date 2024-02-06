import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as chartdata from '../../../shared/data/charts/echarts'

@Component({
  selector: 'app-e-charts',
  templateUrl: './e-charts.component.html',
  styleUrls: ['./e-charts.component.scss']
})
export class EChartsComponent implements OnInit {

  currentRoute: any;
  urlData: any;
  constructor(private router:Router) { 
    
    router.events.pipe(filter((event:any)=> event instanceof NavigationEnd)).subscribe( (event:any) => {
      this.currentRoute = event.url;
      this.urlData = event.url.split("/")
    })
  }
  ngOnInit(): void {
  }
  public echartLineOption = chartdata.echartLineOption;
  public echartLineBarOption = chartdata.echartLineBarOption;
  public echartHorizontalLineChart = chartdata.echartHorizontalLineChart;
  public echartHorizontalLineBarChart = chartdata.echartHorizontalLineBarChart;
  public echartStackedBarChart = chartdata.echartStackedBarChart;
  public echartHoriStackedBarChart = chartdata.echartHoriStackedBarChart;

}
