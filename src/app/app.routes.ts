import { Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { TestComponent } from './test/test.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';

export const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'allOrders', component: AllOrdersComponent },
  { path: 'newOrder', component: CreateOrderComponent }, // <-- Añadir esta ruta
  { path: 'deleteOrder', component: DeleteOrderComponent },

  { path: '', redirectTo: '/orders', pathMatch: 'full' }, // Asegúrate de redirigir a una ruta válida
  { path: '**', redirectTo: '/orders', pathMatch: 'full' } // En caso de rutas no encontradas, redirige a "orders"
];
