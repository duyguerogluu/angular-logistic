import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  basicPage = 1;
  modalPage = 5;
  alphabetpage = 3;
  advPage = 4;
  alignPage = 1;
  alignPageLeft = 1;
  alignPageCenter = 2;
  alignPageEnd = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
