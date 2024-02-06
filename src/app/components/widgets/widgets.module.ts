import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { GalleryModule, ModalGalleryService } from '@ks89/angular-modal-gallery';  
import 'hammerjs';
import 'mousetrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    WidgetsComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    NgbModule,
    NgChartsModule,
    NgCircleProgressModule.forRoot(),
    GalleryModule,
    FormsModule, ReactiveFormsModule,
    SharedModule
  ],
  providers:[ModalGalleryService]
})
export class WidgetsModule { }
