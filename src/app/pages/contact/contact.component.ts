import { Component, inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

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

  isLinear = false;

  // // Génère le message et ouvre WhatsApp avec les informations du formulaire
  // sendToWhatsApp() {
  //   // Numéro WhatsApp du salon (format international obligatoire)
  //   const phoneNumber = '759236988'; // format international WhatsApp

  //   const nom = this.premierFormulaireGroupe.value.premierCtrl;
  //   const coiffure = this.coiffureFormGroup.value.type;
  //   const details = this.coiffureFormGroup.value.details || 'Aucun détail';
  //   const date = this.rdvFormGroup.value.date;
  //   const heure = this.rdvFormGroup.value.heure;

  //   // Message envoyé automatiquement sur WhatsApp
  //   const message = `Bonjour 👋\n\nJe m'appelle ${nom}.\n\nJe souhaite prendre contact avec Good Mother Hair Braiding.\n\nCoiffure : 
  //   ${coiffure}\nDétails : ${details}\nDate souhaitée : ${date} à ${heure}`;
    

  //   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  //   window.open(url, '_blank');
  // }
  sendToWhatsApp() {
  const phoneNumbers = [
    '16095107489',
    '16316127008',
    '33759236988'
  ];

  const nom = this.premierFormulaireGroupe.value.premierCtrl;
  const coiffure = this.coiffureFormGroup.value.type;
  const details = this.coiffureFormGroup.value.details || 'Aucun détail';
  const date = this.rdvFormGroup.value.date;
  const heure = this.rdvFormGroup.value.heure;

  const message = `Bonjour 👋

Je m'appelle ${nom}.

Je souhaite prendre contact avec Good Mother Hair Braiding.

Coiffure : ${coiffure}
Détails : ${details}
Date souhaitée : ${date} à ${heure}`;

  phoneNumbers.forEach(number => {
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  });
}
}
