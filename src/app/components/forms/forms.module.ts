import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormsAdvancedComponent } from './forms-advanced/forms-advanced.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormsRoutingModule } from './forms-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';
import { AngularMaterialSelectComponent } from './angular-material-select/angular-material-select/angular-material-select.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import { MaterialStepperComponent } from './form-wizards/angular-material-stepper/material-stepper/material-stepper.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormElementsComponent,
    FormsAdvancedComponent,
    FormEditorComponent,
    FormWizardsComponent,
    FormValidationComponent,
    AngularMaterialSelectComponent,
    MaterialStepperComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    ColorPickerModule,
    NgxDaterangepickerMd.forRoot(),
    NgxMaterialTimepickerModule,
    AngularMultiSelectModule,
    AngularDualListBoxModule,
    NgxIntlTelInputModule,
    CKEditorModule,
    AngularEditorModule,
    QuillModule,
    ToastrModule.forRoot(),
    ArchwizardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    SharedModule
  ],
  providers:[
    ToastrService
  ]
})
export class FormModule { }
