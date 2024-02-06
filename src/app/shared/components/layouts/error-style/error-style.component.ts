import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-style',
  templateUrl: './error-style.component.html',
  styleUrls: ['./error-style.component.scss']
})
export class ErrorStyleComponent implements OnInit {
  isDark:boolean = false;
  constructor() { }

  ngOnInit(): void {
    let body:any = document.querySelector('body');
    let bodyDark = body.classList.contains('dark-mode');
    if(bodyDark == true){
      this.isDark = true
    }
    else{
      this.isDark = false
    }
  }

}
