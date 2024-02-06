import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './leaflet/leaflet.component';
import { MapsRoutingModule } from './maps-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LeafletComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    HttpClientModule,
    LeafletModule,
    FormsModule, ReactiveFormsModule,
    SharedModule
  ]
})
export class MapsModule { }
