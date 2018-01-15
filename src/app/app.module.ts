import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShowDriversComponent} from "./pages/show-drivers/show-drivers.component";
import {DriverService} from "./core/services/driver.service";

@NgModule({
  declarations: [
    AppComponent,
    ShowDriversComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
