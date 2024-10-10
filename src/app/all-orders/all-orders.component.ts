import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']  // Aquí la corrección, "styleUrls" en plural
})
export class AllOrdersComponent implements OnInit {
  orders: any[] = [];
  isLoading = true;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
        this.isLoading = false;
      },
      error: (err) => console.log(err),
      complete: () => console.log('All orders fetched successfully')
    });
  }
}
