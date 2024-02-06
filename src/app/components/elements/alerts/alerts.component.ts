import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alertPrimary = true;
  alertSecondary = true;
  alertSuccess = true;
  alertInfo = true;
  alertWarning = true;
  alertDanger = true;
  alertLinkSuccess = true;
  alertLinkInfo= true;
  alertLinkWarning = true;
  alertLinkDanger = true;

  alertIconSuccess= true;
  alertIconInfo= true;
  alertIconWarning= true;
  alertIconDanger= true;
  
  alertImgSuccess= true;
  alertImgInfo= true;

  alertStyleSuccess= true;
  alertStyleInfo= true;
  alertStyleWarning= true;
  alertStyleDanger= true;

  constructor() { }

  ngOnInit(): void {
  }

}
