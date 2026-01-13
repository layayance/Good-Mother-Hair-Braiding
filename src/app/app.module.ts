import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import { DashboardModule } from './pages/galerie/dashboard.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    DashboardModule,
    FooterComponent,
    MatNativeDateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
