import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable() // because it can be injected as a dependency
export class ProductRepository {

  private products: Product[] = [];
  private categories: any[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;

      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  // getProducts(category: string = null): Product[] {
  //   return this.products.filter(
  //     (p) => category == null || category == p.category
  //   );
  // }

  // getProduct(id: number): Product {
  //   return this.products.find((p) => p.id == id);
  // }

  getProducts(category: any): Product[]{
    return this.products.filter((p) => category==null || category==p.category);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
