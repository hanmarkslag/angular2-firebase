# Exercise: Bootstrap your first Angular 2 App

The goal of this exercise is to get you started with Angular 2 by bootstrapping your first app. It's purpose is mainly to familiarize yourself with the Angular 2 bootstrap process.

## Scenario

In `app/contacts-app.ts` you'll find two import statements:

```
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
```

Use the the `@Component()` decorator to build a `ContactsApp` component, and the `bootstrap()` function to bootstrap that component. The component should have a template that simply displays "Hello World". Don't forget to specify a `selector` (e.g. `contacts-app`) which you'll use in `app/index.html` as root host element.

## Tasks

1. Create a class `ContactsApp`
2. Decorate `ContactsApp` with `@Component()` decorator
3. Give component an appropriate selector (e.g. `contacts-app`)
4. Define a template on the component that displays "Hello World"
5. Use given selector as tag in `app/index.html`
6. Bootstrap `ContactsApp` using `bootstrap()`

### Additional resources and help

This project comes with a predefined build process. Once installed using

```
$ npm install
```
you can run the build process by executing

```
$ npm start
```

This will transpile the TypeScript source code and spins up a web server on `localhost:3000`, where you can see the running app.

#### API Documentation

- [ComponentFactory](https://angular.io/docs/ts/latest/api/core/ComponentFactory-interface.html)
- [bootstrap](https://angular.io/docs/ts/latest/api/platform/browser/bootstrap-function.html)
