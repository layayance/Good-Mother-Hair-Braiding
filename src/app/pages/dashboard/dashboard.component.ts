import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  coiffures = [
  {
    img: 'assets/img/g.jpeg',
    alt: 'Coiffure africaine élégante',
    label: 'Coiffure élégante'
  },
  {
    img: 'assets/img/afro_court.jpeg',
    alt: 'Afro naturel',
    label: 'Afro naturel court'
  },
  {
    img: 'assets/img/afro_bcp.jpeg',
    alt: 'Coiffure volumineuse',
    label: 'Style volumineux'
  },
  {
    img: 'assets/img/tresse.jpeg',
    alt: 'Tresses africaines',
    label: 'Tresses africaines'
  },
  {
    img: 'assets/img/coupe.jpeg',
    alt: 'Coupe moderne',
    label: 'Coupe moderne'
  }
];

}
