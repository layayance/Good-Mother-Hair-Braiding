import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m =>m.ContactModule) },
  { path: 'services', loadChildren: () => import('./pages/services/services-propose.module').then(m =>m.ServicesProposeModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
