import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-material-stepper',
  templateUrl: './material-stepper.component.html',
  styleUrls: ['./material-stepper.component.scss'], providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true, displayDefaultIndicatorType: false}
  }]
})
export class MaterialStepperComponent implements OnInit {

  editablefirstFormGroup!: FormGroup;
  editablesecondFormGroup!: FormGroup;
  isEditable = false;

  stepErrorfirstFormGroup!: FormGroup;
  stepErrorsecondFormGroup!: FormGroup;

  optionalfirstFormGroup!: FormGroup;
  optionalsecondFormGroup!: FormGroup;
  isOptional = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.editablefirstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.editablesecondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });


    this.stepErrorfirstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.stepErrorsecondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.optionalfirstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.optionalsecondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }

}
