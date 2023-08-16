import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order.service.i';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:4001/orders';

  constructor(private http: HttpClient) {}

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);

  }

  deleteOrder(order_id: string): Observable<Order> {
    const url = `${this.apiUrl}/${order_id}`;
    return this.http.delete<Order>(url);
  }

  createOrder(quantity: number): Observable<Order> {
    const url = `${this.apiUrl}/${quantity}`;
    return this.http.post<Order>(url,{})
  }

  createRamdom(): Observable<Order> {
    const url = `${this.apiUrl}/random-create`;
    return this.http.get<Order>(url);
  }
}
