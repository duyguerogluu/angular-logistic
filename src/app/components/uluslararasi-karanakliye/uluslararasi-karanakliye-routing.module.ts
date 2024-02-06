import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TanimlamalarComponent } from './tanimlamalar/tanimlamalar.component';


const routes: Routes = [
  {
    path: '',
    component: TanimlamalarComponent
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TanimlamalarRoutingModule { }