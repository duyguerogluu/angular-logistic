import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnlasmaSemasiComponent } from './anlasma-semasi/anlasma-semasi.component';
const routes: Routes = [
  {
    path: 'anlasma-yonetimi',
    children: [

      {
        path: 'anlasma-semasi',
        component: AnlasmaSemasiComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnlasmaYonetimiRoutingModule { }
