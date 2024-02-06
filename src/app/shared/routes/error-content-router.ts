import { Routes } from '@angular/router';

export const error_content: Routes = [
  { 
    path: 'error',
    loadChildren: () => import('../../pages/error-pages/error-pages.module').then(m => m.ErrorPagesModule),
  }
 
]