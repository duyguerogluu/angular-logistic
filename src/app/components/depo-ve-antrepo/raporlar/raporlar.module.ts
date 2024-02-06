import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AntrepoMalGirisComponent } from './antrepo-mal-giris/antrepo-mal-giris.component';
import { RaporlarRoutingModule } from './raporlar-routing.module';
import { AntrepoyaGirisComponent } from './antrepoya-giris/antrepoya-giris.component';
import { AntrepoCikisiComponent } from './antrepo-cikisi/antrepo-cikisi.component';
import { DefterMalGirisiComponent } from './defter-mal-girisi/defter-mal-girisi.component';
import { StokBilgileriComponent } from './stok-bilgileri/stok-bilgileri.component';
import { AntrepoHizmetlerComponent } from './antrepo-hizmetler/antrepo-hizmetler.component';
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { FormModule } from '../../forms/forms.module';

@NgModule({
  declarations: [
    AntrepoMalGirisComponent,
    AntrepoyaGirisComponent,
    AntrepoCikisiComponent,
    DefterMalGirisiComponent,
    StokBilgileriComponent,
    AntrepoHizmetlerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgSelectModule,
    NgbModule,
    GalleryModule,
    RaporlarRoutingModule,
    FormModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RaporlarModule { }
