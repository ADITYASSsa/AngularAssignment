import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[HttpClientModule, FormsModule],
  providers: [StaticDataSource, ProductRepository,Cart, OrderRepository, Order,
    { provide: StaticDataSource, useClass: RestDataSource }], //register & launch "Services/Injectables"
})
export class ModelModule { }

// no need to export services because it is shared by default -> (injectables)
