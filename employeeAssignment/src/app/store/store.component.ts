import { Cart } from './../model/cart.model';
import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 8;
  public selectedPage = 1;
  showCategoriesDropdown: boolean = false;
  selectedProduct: any;

  constructor(private repository: ProductRepository, private router: Router, private cart: Cart) {}

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  // get products(): Product[]{
  //   return this.repository.getProducts(this.selectedCategory);
  // }

  changeCategory(newCategory?: any) {
    this.selectedCategory = newCategory;
    this.selectedPage = 1;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  clearProductDescription() {
    this.selectedProduct = null;
  }

  changePageSize(newSize: any) {
    this.productsPerPage = Number(newSize.target.value);
    this.changePage(1);
  }
  showProductDescription(product: any) {
    this.selectedProduct = product;
  }


  addProductToCart(product: Product) {

       this.cart.addLine(product);

       this.router.navigateByUrl("/cart");

}
  toggleCategoriesDropdown() {
  this.showCategoriesDropdown = !this.showCategoriesDropdown;
}

  get pageCount(): number {
    return Math.ceil(
      this.repository.getProducts(this.selectedCategory).length /
        this.productsPerPage
    );
  }

  get pageNumbers(): number[] {

     return Array(Math.ceil(this.repository

         .getProducts(this.selectedCategory).length / this.productsPerPage))

             .fill(0).map((x, i) => i + 1);



  }
}
