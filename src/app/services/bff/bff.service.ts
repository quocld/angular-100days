import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../http/order.service.i';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BffService {
  private apiUrl = 'http://localhost:8888';

  constructor(private http: HttpClient) {}

  billing(order_id: string): Observable<Order> {
    return this.http.post<Order>(
      this.apiUrl + '/order-kafka/billing',
      { order_id: order_id },
      httpOptions
    );
  }
}
