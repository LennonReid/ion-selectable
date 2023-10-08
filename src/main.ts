import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { HttpClientModule } from '@angular/common/http';
if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      IonicModule.forRoot(),
      RouterModule.forRoot(AppRoutes),
    ),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
  .catch(err => console.log(err));
