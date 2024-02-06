import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnlasmaSemasiComponent } from './anlasma-semasi/anlasma-semasi.component';
import { AnlasmaYonetimiRoutingModule } from './anlasma-yonetimi-routing.module';


@NgModule({
  declarations: [
     AnlasmaSemasiComponent
  ],
  imports: [
    AnlasmaYonetimiRoutingModule,
    CommonModule,
    SharedModule,
    AngularEditorModule,
    HttpClientModule,
    NgxDropzoneModule,
    NgbModule,
  ]
})
export class AnlasmaYonetimiModule { }
