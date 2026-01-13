import {Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ CommonModule,TranslateModule ],
  templateUrl: './services-propose.component.html',
  styleUrls: ['./services-propose.component.scss']
})
export class ServicesProposeComponent {
  constructor(private translate: TranslateService ){}

   switchLang(lang: 'fr' | 'en' | 'es') {
    this.translate.use(lang);
  }
}
