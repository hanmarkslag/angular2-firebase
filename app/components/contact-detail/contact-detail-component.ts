
import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {ContactsService} from '../../common/contacts-service'
import {Contact} from '../../models/contact';

@Component({
  selector: 'contact-detail',
  templateUrl: './app/components/contact-detail/contact-detail-component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ContactDetailComponent {

  id: String;
  contact: Contact;

  constructor(params: RouteParams, service: ContactsService) {
    this.id = params.get('id');
    this.contact = service.getContact(this.id)
  }

}
