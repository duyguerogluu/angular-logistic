import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  page = 1;

  currentRate = 5;
  currentRate1 = 3;
  currentRate2 = 1;
  currentRate3 = 4;
  currentRate4 = 4;
  currentRate5 = 2;
  currentRate6 = 1;
  currentRate7 = 5;
  currentRate8 = 3;
  currentRate9 = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
