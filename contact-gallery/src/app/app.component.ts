import { Component } from '@angular/core';
import { Contact } from '../assets/resources/contact';
import { CONTACTS } from '../assets/resources/contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-gallery';
  contacts: Contact[] = CONTACTS;
  

  constructor() {
  }

  onSearchTextChanged(contactName: string) {
    if (contactName === '' || !contactName)
      this.contacts = CONTACTS;
    else {
      this.contacts = CONTACTS;
      this.contacts = this.contacts.filter(fruit => fruit.firstName?.startsWith(contactName));
    }
  }
}
