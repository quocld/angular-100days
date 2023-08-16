import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../button/button.component';
import { OrderService } from 'src/app/services/http/order.service';

@Component({
  selector: 'app-create-order-dialog',
  templateUrl: './create-order-dialog.component.html',
  styleUrls: ['./create-order-dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ButtonComponent,
  ],
})
export class CreateOrderDialogComponent {
  @Output() onLoadOrders = new EventEmitter();

  constructor(private ordersService: OrderService) {}

  quantity: number = 0;

  onCreate(quantity: number) {
    if (quantity != 0) {
      this.ordersService.createOrder(quantity).subscribe(() => {
        this.onLoadOrders.emit(1);
      });
    }
    this.quantity = 0;
  }
}
