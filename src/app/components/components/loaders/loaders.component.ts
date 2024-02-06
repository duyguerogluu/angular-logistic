import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss']
})
export class LoadersComponent implements OnInit {

  public isCollapsed = false;
  public isClosed = false;
  public isCollapsed1 = false;
  public isClosed1 = false;
  public isCollapsed2 = false;
  public isClosed2 = false;
  public isCollapsed3 = false;
  public isClosed3 = false;
  public isCollapsed4 = false;
  public isClosed4 = false;
  public isCollapsed5 = false;
  public isClosed5 = false;

  Collapsetoggle() {
    this.isCollapsed = !this.isCollapsed;
  }
  Closetoggle() {
    this.isClosed = true
  }
  Collapsetoggle1() {
    this.isCollapsed1 = !this.isCollapsed1;
  }
  Closetoggle1() {
    this.isClosed1 = true
  }
  Collapsetoggle2() {
    this.isCollapsed2 = !this.isCollapsed2;
  }
  Closetoggle2() {
    this.isClosed2 = true
  }
  Collapsetoggle3() {
    this.isCollapsed3 = !this.isCollapsed3;
  }
  Closetoggle3() {
    this.isClosed3 = true
  }
  Collapsetoggle4() {
    this.isCollapsed4 = !this.isCollapsed4;
  }
  Closetoggle4() {
    this.isClosed4 = true
  }
  Collapsetoggle5() {
    this.isCollapsed5 = !this.isCollapsed5;
  }
  Closetoggle5() {
    this.isClosed5 = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
