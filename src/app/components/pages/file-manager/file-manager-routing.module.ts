import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileAttachmentsComponent } from './file-attachments/file-attachments.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';
import { FileManagerComponent } from './file-manager/file-manager.component';

const routes: Routes = [
  {path:'files', children:[
    {path: 'file-manager',
      component: FileManagerComponent
    },
    {
      path: 'file-manager-list',
      component: FileManagerListComponent
    },
    {
      path: 'file-details',
      component: FileDetailsComponent
    },
    {
      path: 'file-attachments',
      component: FileAttachmentsComponent
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }
