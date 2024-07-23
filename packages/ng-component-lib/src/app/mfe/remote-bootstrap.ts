import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

import { RegisterWidgetModule } from './register-widget.module';

platformBrowserDynamic()
  .bootstrapModule(RegisterWidgetModule)
  .catch((error: Error) => console.error(error));

export { RegisterWidgetModule };
