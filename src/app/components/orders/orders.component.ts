import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],  // Añade CommonModule aquí para habilitar *ngIf
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order: any;
  orderId: string = '8fa85f64-5717-4562-b3fc-2c963f66afa6';  // ID de la orden

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrderById(this.orderId).subscribe({
      next: (data) => {
        this.order = data;  // Asigna los datos de la API
      },
      error: (err) => console.error(err),
      complete: () => console.log('Order fetched successfully.')
    });
  }
}
