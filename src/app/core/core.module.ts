import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from "./components/header/header.component";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
