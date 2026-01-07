import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  isMobile() {
    return window.innerWidth < 768;
  }
}