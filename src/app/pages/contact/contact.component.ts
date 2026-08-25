import { Component, inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

/** @title Datepicker with custom date classes */

@Component({
  selector: 'app-contact',
  imports: [SharedModule,MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private breakpointObserver = inject(BreakpointObserver);

  stepperOrientation = toSignal(
    this.breakpointObserver.observe('(min-width: 769px)').pipe(
      map(({ matches }): StepperOrientation => matches ? 'horizontal' : 'vertical')
    ),
    { initialValue: 'vertical' as StepperOrientation }
  );

  // ÉTAPE 1 — Informations client (nom)
  premierFormulaireGroupe = this.fb.group({
    premierCtrl: ['', Validators.required],
  });

  // ÉTAPE 2 — Choix de la coiffure
  coiffureFormGroup = this.fb.group({
    type: ['', Validators.required],
    details: [''], // optionnel
  });

  // ÉTAPE 3 — Date et heure du rendez-vous
  rdvFormGroup = this.fb.group({
    date: ['', Validators.required],
    heure: ['', Validators.required],
  });

  // Mise en forme du calendrier (jours mis en évidence)
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  isLinear = true;

  sendToWhatsApp() {
  const primaryPhoneNumber = '16095107489';

  const name = this.premierFormulaireGroupe.value.premierCtrl;
  const hairstyle = this.coiffureFormGroup.value.type;
  const details = this.coiffureFormGroup.value.details || 'No additional details';
  const date = this.rdvFormGroup.value.date;
  const time = this.rdvFormGroup.value.heure;

  const message = `Hello 👋

My name is ${name}.

I would like to book an appointment with Good Mother Hair Braiding.

Hairstyle: ${hairstyle}
Details: ${details}
Preferred date: ${date} at ${time}`;

  window.open(
    `https://wa.me/${primaryPhoneNumber}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}
}
