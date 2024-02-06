import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { NotificationSidemenuComponent } from './components/notification-sidemenu/notification-sidemenu.component';
import { HeaderBreadcrumbComponent } from './components/header-breadcrumb/header-breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TabToTopComponent } from './components/tab-to-top/tab-to-top.component';
import { FullContentComponent } from './components/layouts/full-content/full-content.component';
import { ErrorStyleComponent } from './components/layouts/error-style/error-style.component';
import { ContentStyleComponent } from './components/layouts/content-style/content-style.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FullscreenToggleDirective } from './directives/fullscreen-toggle.directive';
import { ToggleThemeDirective } from './directives/toggle-theme.directive';
import { SidemenuToggleDirective } from './directives/sidemenuToggle';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';
import { ColorPickerModule } from 'ngx-color-picker';
import { CloseSwitcherDirective } from './directives/close-switcher.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    LoaderComponent,
    SwitcherComponent,
    NotificationSidemenuComponent,
    HeaderBreadcrumbComponent,
    TabToTopComponent,
    FullContentComponent,
    ErrorStyleComponent, 
    ContentStyleComponent,
    HeaderBreadcrumbComponent,
    TabToTopComponent,
    FullscreenToggleDirective,
    ToggleThemeDirective,
    SidemenuToggleDirective,
    HoverEffectSidebarDirective,
    CloseSwitcherDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,
    NgbModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports:[
    FullContentComponent,
    ErrorStyleComponent, 
    ContentStyleComponent,
    HeaderBreadcrumbComponent,
    TabToTopComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
