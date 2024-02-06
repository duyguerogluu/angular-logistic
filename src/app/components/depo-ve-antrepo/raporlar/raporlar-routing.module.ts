import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntrepoCikisiComponent } from './antrepo-cikisi/antrepo-cikisi.component';
import { AntrepoHizmetlerComponent } from './antrepo-hizmetler/antrepo-hizmetler.component';
import { AntrepoMalGirisComponent } from './antrepo-mal-giris/antrepo-mal-giris.component';
import { AntrepoyaGirisComponent } from './antrepoya-giris/antrepoya-giris.component';
import { DefterMalGirisiComponent } from './defter-mal-girisi/defter-mal-girisi.component';
import { StokBilgileriComponent } from './stok-bilgileri/stok-bilgileri.component';
const routes: Routes = [
  {
    path: 'evraklar',
    children: [
      {
        path: 'antrepo-mal-giris',
        component: AntrepoMalGirisComponent,
      },
      {
        path: 'antrepoya-giris',
        component: AntrepoyaGirisComponent,
      },
      {
        path: 'antrepo-cikisi',
        component: AntrepoCikisiComponent,
      },
      {
        path: 'defter-mal-girisi',
        component: DefterMalGirisiComponent,
      },
      {
        path: 'stok-bilgileri',
        component:StokBilgileriComponent,
      },
      {
        path: 'antrepo-hizmetler',
        component:AntrepoHizmetlerComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaporlarRoutingModule { }
