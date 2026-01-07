import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesProposeComponent } from './services-propose.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ServicesProposeComponent }
    ])
  ]
})
export class ServicesProposeModule { }
