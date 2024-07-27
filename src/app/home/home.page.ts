import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] //2ejemplo
})
export class HomePage {

  constructor() {}
//btn personalizazo
  handleButtonClick(buttonName: string) {
    console.log(`${buttonName} clicked!`);
    // Puedes realizar otras acciones aquí.
  }
/*tarjetas
  handleCardClick(cardName: string) {
    console.log(`${cardName} clicked!`);
    // Puedes agregar lógica adicional aquí.
  }*/

  handleCardClick(destination: string) {
    console.log(`Información sobre: ${destination}`);
    // Aquí puedes redirigir a una página de detalles del destino o mostrar un mensaje.
  }
//Lista
  handleItemClick(itemName: string) {
    console.log(`${itemName} clicked!`);
    // Puedes agregar lógica adicional aquí.
  }

}

