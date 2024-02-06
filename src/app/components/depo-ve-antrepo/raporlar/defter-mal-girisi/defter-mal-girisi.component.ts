import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-defter-mal-girisi',
  templateUrl: './defter-mal-girisi.component.html',
  styleUrls: ['./defter-mal-girisi.component.scss','./defter-mal-girisi.component.css']
})
export class DefterMalGirisiComponent implements OnInit {

  hesaplanacakhizmetler:boolean = true;
  digermasraflar:boolean = false;
  depokonum:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  btnhesaplancakhizmetlerOnclick(){
    this.hesaplanacakhizmetler = true;
    this.digermasraflar = false;
    this.depokonum = false;
  }

  btndigermasraflarOnclick(){
    this.hesaplanacakhizmetler = false;
    this.digermasraflar = true;
    this.depokonum = false;
  }

  btndepokonumOnclick(){
    this.hesaplanacakhizmetler = false;
    this.digermasraflar = false;
    this.depokonum = true;
  }


}
