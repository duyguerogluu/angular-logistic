import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AracHesaplariComponent } from './arac-hesaplari/arac-hesaplari.component';
import { SurucuSeferHesabiRoutingModule } from './surucu-sefer-hesabi-routing.module';
import { SeferlerComponent } from './seferler/seferler.component';
import { PozisyonlarHesabiComponent } from './pozisyonlar-hesabi/pozisyonlar-hesabi.component';


@NgModule({
  declarations: [
    AracHesaplariComponent,
    SeferlerComponent,
    PozisyonlarHesabiComponent
  ],
  imports: [
    SurucuSeferHesabiRoutingModule,
    CommonModule,
    SharedModule,
    AngularEditorModule,
    HttpClientModule,
    NgxDropzoneModule,
    NgbModule,
  ]
})
export class SurucuSeferHesabiModule { }
