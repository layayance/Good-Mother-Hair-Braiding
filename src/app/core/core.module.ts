import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from "./components/header/header.component";
import {RouterLink} from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
