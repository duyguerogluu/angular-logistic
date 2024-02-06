import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  TabStyle1:any;
  TabStyle2:any;
  TabStyle4:any;
  constructor() { }

  ngOnInit(): void {
  }

}
