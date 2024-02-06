import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AracComponent } from './arac/arac.component';
import { MusteriTedarikciComponent } from './musteri-tedarikci/musteri-tedarikci.component';
import { SurucuComponent } from './surucu/surucu.component';
import { TirKarnesiComponent } from './tir-karnesi/tir-karnesi.component';
const routes: Routes = [
  {
    path: 'tanimlamalar',
    children: [
      {
        path: 'musteri-tedarikci',
        component: MusteriTedarikciComponent,
      },
      {
        path: 'arac',
        component: AracComponent,
      },
      {
        path: 'surucu',
        component: SurucuComponent,
      },
      {
        path: 'tir-karnesi',
        component: TirKarnesiComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TanimlamalarRoutingModule { }
