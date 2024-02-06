import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjeYukSiparisleriComponent } from './proje-yuk-siparisleri/proje-yuk-siparisleri.component';

const routes: Routes = [
  {
    path: 'operasyon-yonetimi',
    children: [

      {
        path: 'proje-yuk-siparisleri',
        component: ProjeYukSiparisleriComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperasyonYonetimiRoutingModule { }
