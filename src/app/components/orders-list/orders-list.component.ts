import { Component, OnInit } from '@angular/core';
import { BffService } from 'src/app/services/bff/bff.service';
import { OrderService } from 'src/app/services/http/order.service';
import { Order } from 'src/app/services/http/order.service.i';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  constructor(
    private ordersService: OrderService,
    private bffService: BffService
  ) {}
  orders: Order[] = [];

  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((orders) => {
      console.log(orders);
      this.orders = orders;
    });
  }

  refreshOrder() {
    this.loadOrders();
  }

  loadOrders() {
    console.log('loadOrder');
    this.ordersService.getOrder().subscribe((orders) => {
      this.orders = orders;
    });
  }

  deleteTask(order_id: string) {
    this.ordersService
      .deleteOrder(order_id)
      .subscribe(
        () => (this.orders = this.orders.filter((t) => t._id !== order_id))
      );
  }

  onCreateRandom() {
    this.ordersService.createRamdom().subscribe((newOrder) => {
      this.orders = [...this.orders, newOrder];
    });
  }

  billingOrder(order_id: string) {
    this.bffService.billing(order_id).subscribe(() => {
      this.loadOrders();
    });
  }
}
