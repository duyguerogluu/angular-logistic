import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AracHesaplariComponent } from './arac-hesaplari/arac-hesaplari.component';
import { PozisyonlarHesabiComponent } from './pozisyonlar-hesabi/pozisyonlar-hesabi.component';
import { SeferlerComponent } from './seferler/seferler.component';

const routes: Routes = [
  {
    path: 'surucu-sefer-hesabi',
    children: [
      {
        path: 'arac-hesaplari',
        component: AracHesaplariComponent,
      },
      {
        path: 'seferler',
        component: SeferlerComponent,
      },
      {
        path: 'pozisyonlar-hesabi',
        component: PozisyonlarHesabiComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurucuSeferHesabiRoutingModule { }
