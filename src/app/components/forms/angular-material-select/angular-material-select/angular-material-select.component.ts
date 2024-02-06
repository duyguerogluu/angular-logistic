import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface country {
  value: string;
  viewValue: string;
}

interface countryGroup {
  disabled?: boolean;
  name: string;
  country: country[];
}


@Component({
  selector: 'app-angular-material-select',
  templateUrl: './angular-material-select.component.html',
  styleUrls: ['./angular-material-select.component.scss']
})
export class AngularMaterialSelectComponent implements OnInit {
  months = new FormControl();
  monthList: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  disableSelect = new FormControl(false);

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

  countryControl = new FormControl();
  countryGroups: countryGroup[] = [
    {
      name: 'Asia',
      country: [
        {value: 'india', viewValue: 'India'},
        {value: 'southKorea', viewValue: 'South Korea'}
      ]
    },
    {
      name: 'Asia Pacific',
      disabled: true,
      country: [
        {value: 'singapore', viewValue: 'Singapore'}
      ]
    },
    {
      name: 'Europe',
      country: [
        {value: 'germany', viewValue: 'Germany'},
        {value: 'france', viewValue: 'France'},
        {value: 'sweden', viewValue: 'Sweden'}
      ]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
