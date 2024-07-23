import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyButtonComponent } from './my-button/my-button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, MyButtonComponent],
})
export class RegisterWidgetModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(MyButtonComponent, {
      injector: this.injector,
    });

    customElements.define('ng-button-widget', el);
  }
}
