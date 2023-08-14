import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/services/http/order.service.i';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order!: Order;

  constructor() {
  }

  ngOnInit(): void {}



}
