# Exercise: Fetching data using Http

In this exercise we're going to replace our static `CONTACT_DATA` with actual http requests to fetch the data from a remote web server.

## Scenario

Until now we've worked with static (mock) data provided by collection via our `ContactsService`. We now want to take it one step further and fetch this data from a server using Angular's `Http` layer.

In order to make http work, we need to configure our application's dependency injector and teach it some http capabilities. Just like for the router, Angular provides a predefined list of providers for http, exported as `HTTP_PROVIDERS` in `angular2/http`.

We also need to import operators for reactive extensions. In this exercise we're mainly interested in the `map()` function which we can import from `rxjs/add/operator/map`.

Use these new tools to extend `ContactsService` to use `Http` and fetch the contacts data from `localhost:4000`.

## Tasks

1. Import `HTTP_PROVIDERS` from `angular2/http`
2. Import `rxjs/add/operator/map` (No named imports needed!)
3. Import `Injectable` to use it in `ContactsService`
4. Add `@Injectable()` decorator to `ContactsService`
5. Import `Http` and inject it into `ContactsService`
6. Create a property `API_ENDPOINT` with the value of `localhost:4000` in `ContactsService`
7. Change `getContacts()` so that it uses `Http.get()` to fetch contacts data from `localhost:4000/contacts`.
8. Do the same for `getContact()`. Keep in mind that this API expects a parameter (`localhost:4000/contacts/{$id}`
9. Change `ContactsService` usage in `ContactDetailComponent`, `ContactEditorComponent` and `ContactsListComponent` since it's now based on observables
10. Fix rendering in `ContactDetailComponent`'s view using elvis operator (`contact?.[PROPERTY]`)
11. Make sure to initialize `contact: Contact = <Contact>{};` in `ContactEditorComponent` since the elvis operator can't be used with `ngModel`

### Additional resources and help

- [HTTP_PROVIDERS](https://angular.io/docs/ts/latest/api/http/HTTP_PROVIDERS-let.html)
- [Http](https://angular.io/docs/ts/latest/api/http/Http-class.html)
- [Angular 2 Developer Guide: Server Communication](https://angular.io/docs/ts/latest/guide/server-communication.html)
- [Taking advantage of Observables in Angular 2](http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html)
- [Taking advantage of Observables in Angular 2 - Part 2](http://blog.thoughtram.io/angular/2016/01/07/taking-advantage-of-observables-in-angular2-pt2.html)
- [Template Syntax - Elvis Operator](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#the-elvis-operator-and-null-property-paths)
