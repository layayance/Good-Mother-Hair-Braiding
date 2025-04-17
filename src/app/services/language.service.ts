import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang: 'fr' | 'en' = 'fr';

  setLang(lang: 'fr' | 'en') {
    this.currentLang = lang;
  }

  getLang(): 'fr' | 'en' {
    return this.currentLang;
  }

  translate(texts: { fr: string; en: string }): string {
    return this.currentLang === 'fr' ? texts.fr : texts.en;
  }
}
