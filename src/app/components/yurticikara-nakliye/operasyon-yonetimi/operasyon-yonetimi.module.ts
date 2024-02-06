import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjeYukSiparisleriComponent } from './proje-yuk-siparisleri/proje-yuk-siparisleri.component';
import { OperasyonYonetimiRoutingModule } from './operasyon-yonetimi-routing.module';


@NgModule({
  declarations: [
    ProjeYukSiparisleriComponent
  ],
  imports: [
    OperasyonYonetimiRoutingModule,
    CommonModule,
    SharedModule,
    AngularEditorModule,
    HttpClientModule,
    NgxDropzoneModule,
    NgbModule,
  ]
})
export class OperasyonYonetimiModule { }
