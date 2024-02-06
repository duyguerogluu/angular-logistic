import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TanimlamalarComponent } from './tanimlamalar/tanimlamalar.component';
import { TanimlamalarRoutingModule } from './uluslararasi-karanakliye-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule, ModalGalleryService } from '@ks89/angular-modal-gallery';  
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import 'mousetrap';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tanimlamalar',
        component: TanimlamalarComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UluslararasiModule { }
