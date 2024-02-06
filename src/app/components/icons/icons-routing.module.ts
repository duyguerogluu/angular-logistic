import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { IonicIconsComponent } from './ionic-icons/ionic-icons.component';
import { MaterialDesignIconsComponent } from './material-design-icons/material-design-icons.component';
import { Pe7IconsComponent } from './pe7-icons/pe7-icons.component';
import { SimpleLineIconsComponent } from './simple-line-icons/simple-line-icons.component';
import { ThemifyIconsComponent } from './themify-icons/themify-icons.component';
import { TypiconsIconsComponent } from './typicons-icons/typicons-icons.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'feather-icons',
        component: FeatherIconsComponent
      },
      {
        path: 'flag-icons',
        component: FlagIconsComponent
      },
      {
        path: 'font-awesome',
        component: FontAwesomeComponent
      },
      {
        path: 'ionic-icons',
        component: IonicIconsComponent
      },
      {
        path: 'material-design',
        component: MaterialDesignIconsComponent
      },
      {
        path: 'pe7-icons',
        component: Pe7IconsComponent
      },
      {
        path: 'simple-line',
        component: SimpleLineIconsComponent
      },
      {
        path: 'themify-icons',
        component: ThemifyIconsComponent
      },
      {
        path: 'typicons',
        component: TypiconsIconsComponent
      },
      {
        path: 'weather-icons',
        component: WeatherIconsComponent
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }