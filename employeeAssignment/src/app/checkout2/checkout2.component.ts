import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.css']
})
export class Checkout2Component {
  orderSent: boolean = false;
  submitted: boolean = false;
  order: any = {}; // Define the structure of the order object with appropriate types

  constructor(private router: Router) {}

  submitOrder(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      return ;
    }
    else{
      this.router.navigate(['/final']);
    }


  }


}

