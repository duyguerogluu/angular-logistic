import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import * as chartData from '../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.scss']
})
export class ChartistComponent implements OnInit {

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

  // Charts
  public chart1 = chartData.chart1;
  public chart2 = chartData.chart2;
  public chart3 = chartData.chart3;
  public chart4 = chartData.chart4;
  public chart5 = chartData.chart5;
  public chart6 = chartData.chart6;
  public chart7 = chartData.chart7;
  public chart8 = chartData.chart8;
  public chart9 = chartData.chart9;
  public chart10 = chartData.chart10;
  public chart11 = chartData.chart11;
  
}
