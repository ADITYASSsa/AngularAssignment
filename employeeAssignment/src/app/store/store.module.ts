import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModelModule } from '../model/model.module';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { RouterModule } from '@angular/router';
import { CouponComponent } from '../coupon/coupon.component';
import { FormsModule } from '@angular/forms';
import { Checkout2Component } from '../checkout2/checkout2.component';


@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule, FormsModule
],
  declarations: [StoreComponent,  CartSummaryComponent, CartDetailsComponent, Checkout2Component,CouponComponent, ],
  exports: [StoreComponent, CartDetailsComponent, Checkout2Component]
})
export class StoreModule {



}
