import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  currentRate = 5;
  customCurrentRate = 5;
  customCurrentRateInput = 5;
  selected = 0;
  hovered = 0;
  readonly = false;
  heartRate = 3.45;
  ctrl! : FormControl;

  constructor() { 
    this.ctrl = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {
  }
  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}
