import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MusteriTedarikciComponent } from './musteri-tedarikci/musteri-tedarikci.component';
import { AracComponent } from './arac/arac.component';
import { TanimlamalarRoutingModule } from './tanimlamalar-routing.module';
import { TirKarnesiComponent } from './tir-karnesi/tir-karnesi.component';
import { SurucuComponent } from './surucu/surucu.component';

@NgModule({
  declarations: [
     MusteriTedarikciComponent,
     AracComponent,
     TirKarnesiComponent,
     SurucuComponent
  ],
  imports: [
     TanimlamalarRoutingModule,
    CommonModule,
    SharedModule,
    AngularEditorModule,
    HttpClientModule,
    NgxDropzoneModule,
    NgbModule,
  ]
})
export class TanimlamalarModule { }
