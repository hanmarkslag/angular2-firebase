# Exercise: Display first contact

Time to display our first contact! We know that component properties can be used as expressions in a component's template to display their value. In this exercise we're going to learn how to display data structures from a component, using expressions and interpolations.

## Scenario

"Hello World" is not enough. We want to build a contacts app, so eventually we're going to display a list of contacts. But let's do it one step at a time. In `app/models/contact.ts` you can find a class definition of `Contact`.

```
export class Contact {
  id: Number;
  firstname: string;
  lastname: string;
  street: string;
  city: string;
  zip: string;
  image: string;
}
```

Import this type and create a `contact` property of this type in `ContactsApp` to render the data of a first contact in the component's template (you can find the data in the task list).

## Tasks

1. Import `Contact` from `./models`
2. Create a `contact` property of type `Contact` with the following object:

  ```
  {
    id: 7,
    firstname: 'Diana',
    lastname: 'Ellis',
    street: '6554 park lane',
    zip: '43378',
    city: 'Rush',
    image: 'images/7.jpg'
  }
  ```

3. Render the `contact` information using expressions and interpolations with the following template:

  ```
  <ul class="collection">
    <li class="collection-item avatar">
      <img [src]="INSERT_CONTACT_IMAGE" alt="" class="circle">
      <span class="title">INSER_CONTACT_FIRST_AND_LAST_NAME</span>
    </li>
  </ul>
  ```

  You're probably noticing the brackets in `<img [src]="...">`. Don't be scared! If you're curious, feel free to checkout the resources for more information. We're going to talk about them later.

### Additional resources and help

- [Template Syntax - Property Binding](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding)
