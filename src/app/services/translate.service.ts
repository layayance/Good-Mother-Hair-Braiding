import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateAppService {
  constructor(private translate: TranslateService) {
    this.init();
  }

  init() {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  get currentLang(): string {
    return this.translate.currentLang;
  }
}
