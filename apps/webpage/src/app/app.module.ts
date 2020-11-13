import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxOneSignalModule } from 'ngx-onesignal';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('OneSignalSDKWorker.js', {
      enabled: environment.production,
    }),
    NgxOneSignalModule.forRoot({
      appId: '94953775-34ee-4db9-b4cb-579502c7d6b5',
      safari_web_id: 'web.onesignal.auto.0f4ef0fc-d020-4184-9066-253532c318fc',
      notifyButton: {
        enable: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
