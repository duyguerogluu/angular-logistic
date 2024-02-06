import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu11Component } from './menu11/menu11.component';
import { Menu12Component } from './menu12/menu12.component';

const routes: Routes = [
  {
    path: 'menu1',
    children: [
      {
        path: 'menu11',
        component: Menu11Component,
      },
      {
        path: 'menu12',
        component: Menu12Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu1RoutingModule {}
