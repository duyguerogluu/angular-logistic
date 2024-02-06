import { Component, OnInit } from '@angular/core';
import * as dashboardData from '../../../shared/data/dashboard/dashboard';

interface dashboardTable {
  id: number;
  image: string;
  name: string;
  email: string;
  amount:string;
  date: string;
  status: string;
  statusText: 'string';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  objectArray: dashboardTable[] | any;
  constructor() { 
    this.objectArray = [
      { id: 1, image: "./assets/images/users/11.jpg", name : "Jake poole", email : "jacke123@gmail.com", amount:'$5.321.2', date :'20-11-2020', status: 'Success', statusText: 'success'},
      { id: 2, image: "./assets/images/users/1.jpg", name : "Virginia Gray", email : "virginia456@gmail.com", amount:'$53,3654', date : '20-11-2020', status: 'Success', statusText: 'success' },
      { id: 3, image: "./assets/images/users/12.jpg", name : "Jacob Thomson", email : "jacobthomson@gmail.com", amount:'$1,56,3654', date : '20-11-2020', status: 'Pending', statusText: 'primary' },
      { id: 4, image: "./assets/images/users/13.jpg", name : "Trevor Thomson", email : "trevor@gmail.com", amount:'$12.3', date : '19-11-2020', status: 'Success', statusText: 'success' },
      { id: 5, image: "./assets/images/users/2.jpg", name : "Kylie north", email : "kylie@gmail.com", amount:'$5.312', date : '19-11-2020', status: 'Pending', statusText: 'primary' },
      { id: 6, image: "./assets/images/users/14.jpg", name : "Jan Hodges", email : "jan@gmail.com", amount:'$53.12', date : '19-11-2020', status: 'Cancel', statusText: 'danger' },
      { id: 7, image: "./assets/images/users/4.jpg", name : "Trevor Thomson", email : "trevor@gmail.com", amount:'$2,24,1421', date : '19-11-2020', status: 'Success', statusText: 'success' },
      { id: 8, image: "./assets/images/users/5.jpg", name : "Emily Lewis", email : "emily@gmail.com", amount:'$9.321.', date : '19-11-2020', status: 'Cancel', statusText: 'danger' },

    ];
  }
  ngOnInit(): void {
  }
  
  
  RemoveElementFromObjectArray(key: any) {
    this.objectArray.forEach((value,index)=>{
        if(value.id==key) this.objectArray.splice(index,1);
    });
  } 

  public orderData = dashboardData.OrderData;
  
  public lineChartOptions = dashboardData.lineChartOptions;
  public lineChartType = dashboardData.lineChartType;
  public lineChartLegend = dashboardData.lineChartLegend;
  public lineChartData = dashboardData.lineChartData;
}
