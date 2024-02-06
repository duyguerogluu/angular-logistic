import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusteriTedarikciComponent } from './musteri-tedarikci/musteri-tedarikci.component';
import { StokBilgileriComponent } from './stok-bilgileri/stok-bilgileri.component';
const routes: Routes = [
  {
    path: 'raporlar',
    children: [
     {
          path: 'musteri-tedarikci',
          component: MusteriTedarikciComponent,
        },
        {
          path: 'stok-bilgileri',
          component: StokBilgileriComponent,
        },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TanimlamalarRoutingModule { }
