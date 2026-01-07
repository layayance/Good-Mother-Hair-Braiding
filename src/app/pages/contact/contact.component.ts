import { Component, inject } from '@angular/core';
// import { SharedModule } from '../../shared/';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * @title Aperçu du Stepper
 */ 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private _formBuilder = inject(FormBuilder);

  premierFormulaireGroupe = this._formBuilder.group ({
     premierCtrl : [ '' , Validators.required],
  });
  secondFormGroup = this._formBuilder.group ({
     secondCtrl : [ '' , Validators.required],
  });
  troisiemeFormGroup = this._formBuilder.group({
    date: ['', Validators.required],
    heure: ['', Validators.required],
    coiffure: ['', Validators.required],
  });
  isLinear = false ;

  sendToWhatsApp() {
  const phoneNumber = '759236988'; // Numero du salon 

  const nom = this.premierFormulaireGroupe.value.premierCtrl;
  
  
  const date = this.troisiemeFormGroup.value.date;
  const heure = this.troisiemeFormGroup.value.heure;
  const coiffure = this.troisiemeFormGroup.value.coiffure;

  
  const message = `
  Bonjour 👋 Je souhaite prendre contact avec Good Mother Hair Braiding.

  Nom: ${nom}
  Date souhaitéé:${date}
  Type de coiffure: ${coiffure}
  Heure: ${heure}`;

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, '_blank');
}

}
