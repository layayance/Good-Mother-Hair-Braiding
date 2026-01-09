import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material.module";
import {TranslateModule} from "@ngx-translate/core";
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';





@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule, 
    MatStepperModule
  ],
  exports: [
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule,
    MatStepperModule
  ]
})
export class SharedModule { }
