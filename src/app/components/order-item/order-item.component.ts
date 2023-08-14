import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/services/http/order.service.i';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order!: Order;
  @Output() onDeleteTask: EventEmitter<string> = new EventEmitter();
  @Output() onBillingOrder: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {}

  onDelete(order: Order) {
    this.onDeleteTask.emit(order._id);
  }

  onPay(order: Order){
    this.onBillingOrder.emit(order._id);
  }


}
