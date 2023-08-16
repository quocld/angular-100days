import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatIconModule,
  ],
})
export class CreateOrderComponent {
}