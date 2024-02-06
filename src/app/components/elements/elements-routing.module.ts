import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarRadiusComponent } from './avatar-radius/avatar-radius.component';
import { AvatarRoundedComponent } from './avatar-rounded/avatar-rounded.component';
import { AvatarSquareComponent } from './avatar-square/avatar-square.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { DropDownsComponent } from './drop-downs/drop-downs.component';
import { ListComponent } from './list/list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelsComponent } from './panels/panels.component';
import { TagsComponent } from './tags/tags.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alerts',
        component: AlertsComponent
      },
      {
        path: 'avatar-radius',
        component: AvatarRadiusComponent
      },
      {
        path: 'avatar-rounded',
        component: AvatarRoundedComponent
      },
      {
        path: 'avatar-square',
        component: AvatarSquareComponent
      },
      {
        path: 'badges',
        component: BadgesComponent
      },
      {
        path: 'breadcrumbs',
        component: BreadcrumbsComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: 'dropdowns',
        component: DropDownsComponent
      },
      {
        path: 'navigation',
        component: NavigationComponent
      },
      {
        path: 'pagination',
        component: PaginationComponent
      },
      {
        path: 'panels',
        component: PanelsComponent
      },
      {
        path: 'tags',
        component: TagsComponent
      },
      {
        path: 'thumbnails',
        component: ThumbnailsComponent
      },
      {
        path: 'typography',
        component: TypographyComponent
      }

    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }