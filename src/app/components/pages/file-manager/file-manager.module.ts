import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';
import { FileAttachmentsComponent } from './file-attachments/file-attachments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileDetailsComponent } from './file-details/file-details.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';

@NgModule({
  declarations: [
    FileManagerComponent,
    FileManagerListComponent,
    FileAttachmentsComponent,
    FileDetailsComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    SharedModule,
    GalleryModule
  ]
})
export class FileManagerModule { }
