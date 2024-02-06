import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { AvatarSquareComponent } from './avatar-square/avatar-square.component';
import { AvatarRoundedComponent } from './avatar-rounded/avatar-rounded.component';
import { AvatarRadiusComponent } from './avatar-radius/avatar-radius.component';
import { DropDownsComponent } from './drop-downs/drop-downs.component';
import { ListComponent } from './list/list.component';
import { TagsComponent } from './tags/tags.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BadgesComponent } from './badges/badges.component';
import { PanelsComponent } from './panels/panels.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AlertsComponent,
    ButtonsComponent,
    ColorsComponent,
    AvatarSquareComponent,
    AvatarRoundedComponent,
    AvatarRadiusComponent,
    DropDownsComponent,
    ListComponent,
    TagsComponent,
    PaginationComponent,
    NavigationComponent,
    TypographyComponent,
    BreadcrumbsComponent,
    BadgesComponent,
    PanelsComponent,
    ThumbnailsComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class ElementsModule { }
