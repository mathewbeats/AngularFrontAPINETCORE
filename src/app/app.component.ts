import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-Alex Mathew';

  constructor(private router: Router) {}

  navigateToAllOrders() {
    this.router.navigate(['/allOrders']);
  }

  navigateToOrders() {
    this.router.navigate(['/orders']);
  }

  navigateToCreateOrders(){
    this.router.navigate(['/newOrder']);
  }

  navigateToDeleteOrder(){
    this.router.navigate(['/deleteOrder']);
  }
}
