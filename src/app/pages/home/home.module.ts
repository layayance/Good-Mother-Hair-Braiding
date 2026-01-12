import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';

// ⚠️ Deprecated: HomeComponent is now standalone and must NOT be declared in an NgModule
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule
  ]
})
export class HomeModule { }
