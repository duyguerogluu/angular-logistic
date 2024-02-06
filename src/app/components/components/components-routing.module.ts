import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsDesignComponent } from './cards-design/cards-design.component';
import { ContentScrollbarComponent } from './content-scrollbar/content-scrollbar.component';
import { CountersComponent } from './counters/counters.component';
import { DefaultCalendarComponent } from './default-calendar/default-calendar.component';
import { DefaultChatComponent } from './default-chat/default-chat.component';
import { LoadersComponent } from './loaders/loaders.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { RatingComponent } from './rating/rating.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TreeviewComponent } from './treeview/treeview.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cards-design',
        component: CardsDesignComponent
      },
      {
        path: 'content-scrollbar',
        component: ContentScrollbarComponent
      },
      {
        path: 'counters',
        component: CountersComponent
      },
      {
        path: 'default-calendar',
        component: DefaultCalendarComponent
      },
      {
        path: 'default-chat',
        component: DefaultChatComponent
      },
      {
        path: 'loaders',
        component: LoadersComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'range-slider',
        component: RangeSliderComponent
      },
      {
        path: 'rating',
        component: RatingComponent
      },
      {
        path: 'sweet-alerts',
        component: SweetAlertsComponent
      },
      {
        path: 'timeline',
        component: TimelineComponent
      },
      {
        path: 'treeview',
        component: TreeviewComponent
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }