import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {
  discountApplied: boolean = false;
  discountMessage: string = '';
  isCouponApplied: boolean = false;;

  constructor(public cart:Cart){}
  applyCoupon() {
    if (!this.discountApplied) {

      this.cart.cartPrice *= 0.9;
      this.discountApplied = true;
      this.discountMessage = 'Coupon applied successfully!';
    } else {
      this.discountMessage = 'Coupon has already been applied.';
    }

  }
    removeCoupon() {
      if (this.discountApplied) {

        this.cart.cartPrice /= 0.9;
        this.discountApplied = false;
        this.discountMessage = '';
  }
}
}
