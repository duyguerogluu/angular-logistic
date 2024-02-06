import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule, ModalGalleryService } from '@ks89/angular-modal-gallery';  
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import 'hammerjs';
import 'mousetrap';
import { DepoVeAntrepoRoutingModule } from './depo-ve-antrepo-routing.module';
import { RaporlarModule } from './raporlar/raporlar.module';
import { TanimlamalarModule } from './tanimlamalar/tanimlamalar.module';
import { RaporlarRoutingModule } from './raporlar/raporlar-routing.module';
import { EvraklarComponent } from './evraklar/evraklar.component';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    NgbModule,
    GalleryModule,         
    NgSelectModule,
    SharedModule,
    DepoVeAntrepoRoutingModule,
    RaporlarRoutingModule,
    ],
  providers:[
    ModalGalleryService
  ],
})
export class DepoVeAntrepoModule { }
