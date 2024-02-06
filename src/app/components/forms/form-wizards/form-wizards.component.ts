import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-wizards',
  templateUrl: './form-wizards.component.html',
  styleUrls: ['./form-wizards.component.scss']
})
export class FormWizardsComponent implements OnInit {

  constructor(
    private toaster: ToastrService,) { }

  ngOnInit(): void {
  }

  
  public finish() {
    this.toaster.success('Successfully Registered')
  }



   
  isValidTypeBoolean: boolean = true;
 

}
