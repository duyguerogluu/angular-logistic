import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ECommerceoutingModule } from './e-commerce-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    WishlistComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ECommerceoutingModule,
    NgbModule,
    NgSelectModule,
    CarouselModule,
    SweetAlert2Module,
    SharedModule
  ]
})
export class ECommerceModule { }
