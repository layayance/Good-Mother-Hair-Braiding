import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService,TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class GalerieComponent {

  coiffures = [
      
    { img: 'assets/img/g.jpeg', key: 'elegant' },

    { img: 'assets/img/afro_court.jpeg', key: 'afroShort' },

    { img: 'assets/img/afro_bcp.jpeg', key: 'voluminous' },

    { img: 'assets/img/tresse.jpeg', key: 'braids' },

    { img: 'assets/img/coupe.jpeg', key: 'modernCut' }
];

}
