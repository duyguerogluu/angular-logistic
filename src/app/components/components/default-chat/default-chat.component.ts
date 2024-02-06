import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';


@Component({
  selector: 'app-default-chat',
  templateUrl: './default-chat.component.html',
  styleUrls: ['./default-chat.component.scss']
})
export class DefaultChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    const Chart:any = document.querySelectorAll('#ChatBody, #ChatList, #ChatCalls, #ChatContacts');
    function perfectChart(){
      Chart.forEach( (element:any)=>{
        const ps = new PerfectScrollbar(element,{
          wheelPropagation:true,
          suppressScrollX:true
        });
      } )
    }
    perfectChart()
  }
}
