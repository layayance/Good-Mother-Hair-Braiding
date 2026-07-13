import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/aap.config';
import { inject } from '@vercel/analytics';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    inject();
  })
  .catch(err => console.error(err));