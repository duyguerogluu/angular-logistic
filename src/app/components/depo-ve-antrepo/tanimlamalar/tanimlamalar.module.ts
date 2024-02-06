import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TanimlamalarRoutingModule } from './tanimlamalar-routing.module';
import { StokBilgileriComponent } from './stok-bilgileri/stok-bilgileri.component';
import { MusteriTedarikciComponent } from './musteri-tedarikci/musteri-tedarikci.component';

@NgModule({
  declarations: [
    MusteriTedarikciComponent,
    StokBilgileriComponent
  ],
  imports: [
    CommonModule,
    TanimlamalarRoutingModule,
    SharedModule
  ]
})
export class TanimlamalarModule { }
