import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApexChartData, ApexRandomData, BarData, DonutChartData, PieChartData, RadialBarCircleData, RadialBarCircleMultipleData, StackedBarData } from '../../../shared/data/charts/apex';


@Component({
  selector: 'app-apex-charts',
  templateUrl: './apex-charts.component.html',
  styleUrls: ['./apex-charts.component.scss']
})
export class ApexChartsComponent implements OnInit {

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

  public RandomData = ApexRandomData;
  public apexData = ApexChartData;
  public barData = BarData;
  public stackedbarData = StackedBarData;
  public donutData = DonutChartData;
  public pieData = PieChartData;
  public radicalbarData = RadialBarCircleData;
  public radicalmultipleData = RadialBarCircleMultipleData;

}
