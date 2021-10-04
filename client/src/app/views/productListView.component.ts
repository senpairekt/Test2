import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { Store } from "../services/store.service";

@Component({
    selector: "product-list",
    templateUrl: "productListView.component.html"
})
export class ProductListView implements OnInit {

    constructor(public store: Store) {      

    }
    ngOnInit(): void {
        this.store.loadProducts()
            .subscribe();
    }

}