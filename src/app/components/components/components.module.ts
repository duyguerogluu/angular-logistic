import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsDesignComponent } from './cards-design/cards-design.component';
import { DefaultCalendarComponent } from './default-calendar/default-calendar.component';
import { DefaultChatComponent } from './default-chat/default-chat.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { ContentScrollbarComponent } from './content-scrollbar/content-scrollbar.component';
import { LoadersComponent } from './loaders/loaders.component';
import { CountersComponent } from './counters/counters.component';
import { RatingComponent } from './rating/rating.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ComponentsRoutingModule } from './components-routing.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdTimerModule } from 'angular-cd-timer';
import { NgxNotifierModule } from 'ngx-notifier';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';
import { TreeviewComponent } from './treeview/treeview.component';

@NgModule({
  declarations: [
    CardsDesignComponent,
    DefaultCalendarComponent,
    DefaultChatComponent,
    NotificationsComponent,
    SweetAlertsComponent,
    RangeSliderComponent,
    ContentScrollbarComponent,
    LoadersComponent,
    CountersComponent,
    RatingComponent,
    TimelineComponent,
    TreeviewComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule, ReactiveFormsModule,
    CdTimerModule,
    NgxNotifierModule,
    SweetAlert2Module,
    NgbModule,
    NgxSliderModule,
    MatTreeModule, MatIconModule, MatProgressBarModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    SharedModule
  ]
})
export class ComponentsModule { }
