import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  applyDiscount: boolean = false;

  constructor(public cart : Cart){}


 applyCoupon() {

    this.applyDiscount = !this.applyDiscount;


}}
