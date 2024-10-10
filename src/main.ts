// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { appConfig } from './app/app.config';
// import { provideHttpClient } from '@angular/common/http';  // Nuevo método recomendado
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes';    
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(),
//     provideRouter(routes),  // Usar provideHttpClient en lugar de HttpClientModule
//     ...appConfig.providers
//   ]
// }).catch(err => console.error(err));




import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    RouterModule
  ]
}).catch(err => console.error(err));

