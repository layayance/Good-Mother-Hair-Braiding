import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private renderer: Renderer2;
  private isGrayscale = false;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleGrayscale(): void {
    this.isGrayscale = !this.isGrayscale;
    if (this.isGrayscale) {
      this.renderer.addClass(document.body, 'grayscale');
    } else {
      this.renderer.removeClass(document.body, 'grayscale');
    }
  }

  getCurrentState(): boolean {
    return this.isGrayscale;
  }
}
