import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionsComponent } from './accordions/accordions.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { CryptoCurrenciesComponent } from './crypto-currencies/crypto-currencies.component';
import { FootersComponent } from './footers/footers.component';
import { HeadersComponent } from './headers/headers.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressComponent } from './progress/progress.component';
import { SearchComponent } from './search/search.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipAndPopoverComponent } from './tooltip-and-popover/tooltip-and-popover.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'accordion',
        component: AccordionsComponent
      },
      {
        path: 'carousel',
        component: CarouselsComponent
      },
      {
        path: 'crypto-currencies',
        component: CryptoCurrenciesComponent
      },
      {
        path: 'footers',
        component: FootersComponent
      },
      {
        path: 'headers',
        component: HeadersComponent
      },
      {
        path: 'media-object',
        component: MediaObjectComponent
      },
      {
        path: 'modal',
        component: ModalComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      },
      {
        path: 'tooltip-popover',
        component: TooltipAndPopoverComponent
      },
      {
        path: 'user-list',
        component: UserListComponent
      },

    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedElementsRoutingModule { }