import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded: boolean = false;

  constructor(private dataSource: RestDataSource) {}

  // Load orders from the data source
  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe((orders) => (this.orders = orders));
  }

  // Get a list of orders. If not loaded, load orders first.
  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  // Save an order to the data source
  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  // Update an existing order in the data source
  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe((updatedOrder) => {
      const index = this.orders.findIndex((o) => o.id == updatedOrder.id);
      if (index !== -1) {
        this.orders[index] = updatedOrder;
      }
    });
  }

  // Delete an order from the data source
  deleteOrder(id?: number) {
    this.dataSource.deleteOrder(id).subscribe(() => {
      const index = this.orders.findIndex((o) => id == o.id);
      if (index !== -1) {
        this.orders.splice(index, 1);
      }
    });
  }
}
