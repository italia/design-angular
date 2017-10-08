import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
// import { AccordionComponent } from './accordion/accordion.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { CalloutComponent } from './callout/callout.component';
import { DialogComponent } from './dialog/dialog.component';
import { CookieBarComponent } from './cookiebar/cookiebar.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
      AppComponent,
      AlertComponent,
      // AccordionComponent,
      BreadcrumbComponent,
      ButtonComponent,
      CalloutComponent,
      DialogComponent,
      CookieBarComponent,
      DialogComponent,
      DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


