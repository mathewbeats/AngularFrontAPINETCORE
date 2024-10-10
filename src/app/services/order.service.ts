import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:5197/api/orders';

  constructor(private http: HttpClient) { }

  // Método para obtener una orden por ID
  getOrderById(orderId: string): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;  // Aquí se incluye el orderId en la URL
    return this.http.get<any>(url);
  }

  //metodo para obtener todas las orders

  getAllOrders() : Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  createOrder(order: any) : Observable<any>{

    return this.http.post<any>(this.apiUrl, order);
  }

  deleteOrder(orderId:string) : Observable<any>{
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.delete<any>(url);
  }
}
