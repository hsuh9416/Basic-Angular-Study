import { bootstrapApplication } from '@angular/platform-browser'; // Angular application
import { appConfig } from './app/app.config';  // Import some pre-configuration
import { AppComponent } from './app/app.component'; // Import component

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
