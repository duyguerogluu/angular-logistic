import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaObjectComponent } from './media-object/media-object.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { TabsComponent } from './tabs/tabs.component';
import { ModalComponent } from './modal/modal.component';
import { TooltipAndPopoverComponent } from './tooltip-and-popover/tooltip-and-popover.component';
import { ProgressComponent } from './progress/progress.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchComponent } from './search/search.component';
import { CryptoCurrenciesComponent } from './crypto-currencies/crypto-currencies.component';
import { AdvancedElementsRoutingModule } from './advanced-elements-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialTabsComponent } from './tabs/angular-material-tabs/material-tabs/material-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MediaObjectComponent,
    AccordionsComponent,
    TabsComponent,
    ModalComponent,
    TooltipAndPopoverComponent,
    ProgressComponent,
    CarouselsComponent,
    HeadersComponent,
    FootersComponent,
    UserListComponent,
    SearchComponent,
    CryptoCurrenciesComponent,
    MaterialTabsComponent
  ],
  imports: [
    CommonModule,
    AdvancedElementsRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule,
    MatTabsModule, MatIconModule, MatButtonModule, MatButtonToggleModule, MatProgressBarModule, MatRadioModule, MatCardModule, MatSliderModule,
    SharedModule
  ]
})
export class AdvancedElementsModule { }
