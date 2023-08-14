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
/* 
  deleteTask(task: Order): Observable<Order> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Order>(url);
  }

  updateTaskReminder(task: Order): Observable<Order> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Order>(url, task, httpOptions);
  }

  addTask(task: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, task, httpOptions);
  } */
}
