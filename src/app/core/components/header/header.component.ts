import { Component } from '@angular/core';
import { TranslateService} from "@ngx-translate/core";
import {ThemeService} from "../../../services/theme.service";
import {SharedModule } from "../../../shared/shared.module";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public themeService: ThemeService, private translate: TranslateService) {}

  switchLang(lang: 'fr' | 'en' | 'es'){
    this.translate.use(lang);
  }

  switchLangAndCloseMenu(lang: 'fr' | 'en' | 'es') {
    this.switchLang(lang);
    this.closeMenu();
  }

  toggleGrayscale(){
    this.themeService.toggleGrayscale();
  }

  toggleGrayscaleAndCloseMenu() {
    this.toggleGrayscale();
    this.closeMenu();
  }

  currentLang = this.translate.currentLang;

  isMenuOpen = false;

  toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
  console.log('Menu toggled:', this.isMenuOpen);
}

  closeMenu() {
  this.isMenuOpen = false;
  }

}
