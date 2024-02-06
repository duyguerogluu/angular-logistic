import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';
import { FormsAdvancedComponent } from './forms-advanced/forms-advanced.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form-editor',
        component: FormEditorComponent
      },
      {
        path: 'form-elements',
        component: FormElementsComponent
      },
      {
        path: 'form-validation',
        component: FormValidationComponent
      },
      {
        path: 'form-wizards',
        component: FormWizardsComponent
      },
      {
        path: 'form-advanced',
        component: FormsAdvancedComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }