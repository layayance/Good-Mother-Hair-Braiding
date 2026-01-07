import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

/**
 * @title Toolbar with just text
 */

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',

})
export class FooterComponent {
  currentYear = new Date().getFullYear();

}
