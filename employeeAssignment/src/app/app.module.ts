import { CartDetailsComponent } from '././store/cart-details/cart-details.component';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
import { CouponComponent } from './coupon/coupon.component';
import { Checkout2Component } from './checkout2/checkout2.component';
import { FinalPageComponent } from './final-page/final-page.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: 'store',
        component: StoreComponent,
      },

      {path: 'checktemp',
      component: Checkout2Component},
      {
        path: 'coupon',
        component: CouponComponent,
      },
      {
        path: 'cart',
        component: CartDetailsComponent,
      },
      {
        path: 'final',
        component: FinalPageComponent,
      },
      { path: '**', redirectTo: '/coupon' },
    ]),
  ],

  providers: [],
  declarations: [AppComponent, FinalPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
