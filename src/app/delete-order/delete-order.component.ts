import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-order',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent {

  orderId: string = '';

  constructor(private orderService: OrderService, private router: Router) {}

  deleteOrder() {
    if (this.orderId) {
      this.orderService.deleteOrder(this.orderId).subscribe(
        response => {
          console.log('Order deleted successfully', response);
          this.router.navigate(['/allOrders']);
        },
        error => {
          console.error('Error deleting order', error);
        }
      );
    } else {
      console.error('Order ID is required');
    }
  }
}
