import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1RoutingModule } from './menu1-routing.module';
import { Menu11Component } from './menu11/menu11.component';
import { Menu12Component } from './menu12/menu12.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    Menu11Component,
    Menu12Component
  ],
  imports: [
    CommonModule,
    Menu1RoutingModule,
    SharedModule
  ]
})
export class Menu1Module { }
