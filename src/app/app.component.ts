import { Component } from '@angular/core';
import { LanguageService } from "./services/language.service";
import {ThemeService} from "./services/theme.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'good-mother-hair-braiding';
  constructor(public lanService: LanguageService,
              public themeService: ThemeService) {}

  switchLang(lang: 'fr' | 'en'){
    this.lanService.setLang(lang);
  }
  t(texts: { fr: string; en: string;  }): string {
    return this.lanService.translate(texts);
  }
  toggleGrayscale(){
    this.themeService.toggleGrayscale();
  }
}
