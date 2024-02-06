import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule, ModalGalleryService } from '@ks89/angular-modal-gallery';  
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { OperasyonYonetimiModule } from './operasyon-yonetimi/operasyon-yonetimi.module';
import { YurtıcıKaraNakliyeRoutingModule } from './yurticikara-nakliye-routing.module';
import 'hammerjs';
import 'mousetrap';
import { SurucuSeferHesabiModule } from './surucu-sefer-hesabi/surucu-sefer-hesabi.module';
import { AnlasmaYonetimiModule } from './anlasma-yonetimi/anlasma-yonetimi.module';
import { TanimlamalarModule } from './tanimlamalar/tanimlamalar.module';



@NgModule({
  declarations: [
           
  ],
  imports: [
    CommonModule,
    NgbModule,
    GalleryModule,         
    NgSelectModule,
    SharedModule,
    OperasyonYonetimiModule,
    SurucuSeferHesabiModule,
    YurtıcıKaraNakliyeRoutingModule,
    AnlasmaYonetimiModule,
    TanimlamalarModule
    
  ],
  providers:[
    ModalGalleryService
  ]
})
export class YurticiKaraNakliyeModule { }
