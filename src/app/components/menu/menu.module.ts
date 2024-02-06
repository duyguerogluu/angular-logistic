import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';

import { Menu1Module } from './menu1/menu1.module';
import { MenuRoutingModule } from './menu-routing.module';
import { Menu2Component } from './menu2/menu2.component';
import 'hammerjs';
import 'mousetrap';


@NgModule({
  declarations: [
    Menu2Component,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    NgbModule,
    NgSelectModule,
    SharedModule,
    Menu1Module
  ]
})
export class MenuModule { }
