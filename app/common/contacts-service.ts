import {CONTACT_DATA} from './contact-data';
import {Contact} from '../models/contact'

export class ContactsService {

  private contacts: Contact[] = CONTACT_DATA

  public getContacts() {
    return this.contacts
  }

  public getContact(id: any) {

    for (var i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        return this.contacts[i]
      }
    }
    return null
  }

}
