import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalerieComponent} from "./pages/galerie/dashboard.component";

export const routes: Routes = [
  {
    path: 'home',
    title: 'African Hair Braiding Salon in Trenton, NJ | Good Mother',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact',
    title: 'Book a Hair Braiding Appointment in Trenton, NJ | Good Mother',
    loadChildren: () => import('./pages/contact/contact.module').then(m =>m.ContactModule)
  },
  {
    path: 'services',
    title: 'Braids, Cornrows & Weaves in Trenton, NJ | Good Mother',
    loadChildren: () => import('./pages/services/services-propose.module').then(m =>m.ServicesProposeModule)
  },
  {
    path: 'dashboard',
    title: 'African Braids & Hairstyle Gallery | Good Mother Trenton',
    component: GalerieComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
