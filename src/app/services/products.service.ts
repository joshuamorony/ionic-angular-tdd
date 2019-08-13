import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  public products: any[];

  constructor() {
    this.products = [
      { title: "Cool shoes", description: "Isn't it obvious?", price: "39.99" },
      {
        title: "Broken shoes",
        description: "You should probably get the other ones",
        price: "89.99"
      },
      { title: "Socks", description: "The essential footwear companion", price: "2.99" }
    ];
  }
}
