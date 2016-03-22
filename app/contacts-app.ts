import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Route} from 'angular2/router';

import {ContactHeaderComponent} from './components/contact-header/contact-header-component';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './common/contact-data';
import {ContactsService} from './common/contacts-service'
import {ContactsListComponent} from './components/contacts-list/contacts-list-component'
import {ContactDetailComponent} from './components/contact-detail/contact-detail-component'
import {ContactEditorComponent} from './components/contact-editor/contact-editor-component'

import {CloneService} from './common/clone-service'

import {UserComponent} from './components/user/user-component'
import {UserService} from "./common/user-service";
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'contacts-app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES, NgFor, ContactHeaderComponent]
})
@RouteConfig([
  new Route({path: '/', component: ContactsListComponent, name: 'ContactsList'}),
  new Route({path: '/contacts/:id', component: ContactDetailComponent, name: 'ContactDetail'}),
  new Route({path: '/contact/:id/edit', component: ContactEditorComponent, name: 'ContactEditor'}),
  new Route({path: '/user', component: UserComponent, name: 'UserComponent'})
])
class ContactsApp {
}

bootstrap(ContactsApp, [ContactsService, UserService, CloneService, ROUTER_PROVIDERS, HTTP_PROVIDERS]);
