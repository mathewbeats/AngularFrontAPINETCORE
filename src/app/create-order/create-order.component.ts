import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'] // <-- Cambiado a styleUrls
})

export class CreateOrderComponent {
  productName : string = '';
  quantity: number = 0;


  constructor(private orderService: OrderService, private router: Router){}

  createOrder(){
    const newOrder ={
      orderId: this.generateUUID(),
      productName : this.productName,
      quantity : this.quantity
    };

    this.orderService.createOrder(newOrder).subscribe(
      response => {
        console.log('Order created Succesfully', response);
        this.router.navigate(['/allOrders']);
      },
      error =>{
        console.error('Error creating order', error);
      }
    );
  }






  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

}



