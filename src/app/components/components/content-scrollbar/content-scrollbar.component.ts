import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-content-scrollbar',
  templateUrl: './content-scrollbar.component.html',
  styleUrls: ['./content-scrollbar.component.scss']
})
export class ContentScrollbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const defaultScroll:any = document.querySelector('#default');
    const minimal:any = document.querySelector('#minimal');
    let p = new PerfectScrollbar(defaultScroll);
    let p1 = new PerfectScrollbar(minimal,{
      wheelPropagation:false,
    });
  }
}
