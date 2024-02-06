import { Component, OnInit } from '@angular/core';
import counterUp from 'counterup2';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const el1 = document.querySelector('.counter1')
    const el2 = document.querySelector('.counter2')
    const el3 = document.querySelector('.counter3')
    const el4 = document.querySelector('.counter4')

    // Start counting, do this on DOM ready or with Waypoints.
    counterUp(el1, {
      duration: 1000,
      delay: 16,
    })
    counterUp(el2, {
      duration: 1000,
      delay: 16,
    })
    counterUp(el3, {
      duration: 1000,
      delay: 16,
    })
    counterUp(el4, {
      duration: 1000,
      delay: 16,
    })

  }

}
