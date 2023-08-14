import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/http/order.service';
import { Order } from 'src/app/services/http/order.service.i';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  constructor(private ordersService: OrderService) {}
  orders: Order[] = [];
  ngOnInit(): void {
    this.ordersService.getOrder().subscribe((orders) => {
      console.log(orders);
      this.orders = orders;
    });
  }
}
