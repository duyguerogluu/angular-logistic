import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { DefaultTableComponent } from './default-table/default-table.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'data-tables',
        component: DataTableComponent
      },
      {
        path: 'default-tables',
        component: DefaultTableComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }