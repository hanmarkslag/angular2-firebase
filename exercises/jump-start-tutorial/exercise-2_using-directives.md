# Exercise: Using Directives

In the last exercise we learned how to bootstrap an Angular 2 component. Let's take it one step further and explore how we can use other components inside our `ContactsApp`.

## Scenario

Our `ContactsApp` needs a nice header because, well... that's what fancy apps do, right? In `app/components/contact-header-component.ts` you can find a `ContactHeaderComponent`. Nothing special here. Just a component with a template, something we already know.

Import that component and use it `ContactsApp`'s template. Don't forget to add `ContactHeaderComponent` to the `directives` dependencies.

## Tasks

1. Import `ContactHeaderComponent` from `./components`
2. Add it to `ContactsApp` directives dependencies
3. Add `<contact-header>` to the template

### Additional resources and help

- [ComponentFactory](https://angular.io/docs/ts/latest/api/core/ComponentFactory-interface.html)
