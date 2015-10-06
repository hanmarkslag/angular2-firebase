# Exercise: Route to your first component

The time has come! Let's implement some routing features. In this exercise we're going to route to components.

## Scenario

In order to route from our contacts list to a contact detail page, the first thing we need to do is to extract the current contacts list implementation into its own component, so that `ContactsApp` is just a "frame" that holds our app, consisting of multiple components, together.

## Tasks

1. Create a component `ContactsListComponent` with its template in `app/components/contacts-list-component.ts` using the tools you already know (basically extract the existing functionality of `ContactsApp` into its own component)
2. Import the new `ContactsListComponent` so it can be used in `ContactsApp`
3. Import `ROUTER_PROVIDERS` from `angular2/router`
4. Add `ROUTER_PROVDERS` to `bootstrap()`
5. Import `RouteConfig` from `angular2/router`
6. Add `@RouteConfig()` decorator to `ContactsApp` with a configuration where `/` points to `ContactsListComponent`
7. Import `ROUTER_DIRECTIVES` from `angular2/router`
8. Add `ROUTER_DIRECTIVES` to `ContactsApp`'s directive dependencies
9. Add `<router-outlet>` in `ContactsApp`'s view to load and render components

### Additional resources and help

- [RouteDefinition](https://angular.io/docs/ts/latest/api/router/RouteDefinition-interface.html)
- [ROUTER_PROVIDERS](https://angular.io/docs/ts/latest/api/router/ROUTER_PROVIDERS-let.html)
- [ROUTER_DIRECTIVES](https://angular.io/docs/ts/latest/api/router/ROUTER_DIRECTIVES-let.html)
- [RouterOutlet](https://angular.io/docs/ts/latest/api/router/RouterOutlet-directive.html)
