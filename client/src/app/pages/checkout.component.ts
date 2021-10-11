import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from '../services/store.service';

@Component({
  templateUrl: "checkout.component.html",
  styleUrls: ['checkout.component.css']
})
export default class CheckoutPage implements OnInit {

  constructor(public store: Store, private router: Router) {
  }

  ngOnInit() {
    if (this.store.order.items.length === 0) {
      this.router.navigate(["/"]);
    }
  }

  onCheckout() {
    this.store.errorMessage = "";
    this.store.checkout()
      .subscribe(() => {
        this.router.navigate(["/"]);
        alert("Order Complete...");
      }, () => this.store.errorMessage = "Failed to checkout");
  }
}