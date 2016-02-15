# Exercise: Two-way Data Binding with ngModel

Combining property binding with event binding results in two-way data binding. This exercise demonstrates how `ngModel` and two-way data binding can be used to create our first simple form.

## Scenario

Displaying details of a contact is nice, but we also want to be able to edit them. We want to take advantage of Angular 2's `ngModel` directive that implements two-way data binding to build our first form.

This form displays a `contact` but allows for editing that contact at the same time. We can't work with just single `contact` object here, since we're about to modify it throughout the application lifecycle, and might even want to abort those changes. We need to work with a *clone* while editing a contact.

In `app/common/clone-service.ts` you can find a `CloneService`. The service provides the following APIs:

- **createClone(object: any)**
  Takes an object and returns a clone of that object, while storing a reference to the original and the clone.
- **abortChanges()**
  Removes all the changes done to the clone by resetting it to the original object.
- **commitChanges()**
  Applies changes made to the clone to the original object.

## Tasks

1. Create a new component `ContactEditorComponent` using the tools you already know with the following template:

  ```
  <div class="row">
    <form class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img [src]="INSERT_CONTACT_IMAGE">
          <span class="card-title">INSERT_CONTACT_FIRST_AND_LAST_NAME</span>
        </div>
        <div class="card-content grey-text text-darken-4">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate">
              <label class="active" for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate">
              <label class="active" for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="zip" type="text" class="validate">
              <label class="active" for="zip">Zipcode</label>
            </div>
            <div class="input-field col s6">
              <input id="city" type="text" class="validate">
              <label class="active" for="city">City</label>
            </div>
          </div>
        </div>
        <div class="card-action">
          <button type="button" class="btn" (click)="cancel(contact)">Cancel</button>
          <button type="button" class="btn" (click)="save(contact)">Save</button>
        </div>
      </div>
    </form>
  </div>
  ```
2. Import the new `ContactEditorComponent` so you can use it in `ContactsApp`
3. Add a new route configuration for `ContactsApp` that takes `/contact/:id/edit` and points to `ContactEditorComponent`
4. Add `RouterLink` button to `ContactDetailComponent`'s view that routes to `ContactEditorComponent and passes `contact.id` as `id` route parameter
5. Import `CloneService` and add its provider to `bootstrap()`
6. Inject `CloneService`, `ContactsService`, `RouteParams` and `Router` into `ContactEditorComponent`
7. Create a `contact` property in `ContactEditorComponent`'s constructor by retreiving a contact clone from `CloneService.createClone()` by given route param `id`
8. Render `contact` properties using `ngModel` in `ContactEditorComponent`'s view
9. Implement a method `cancel(contact: Contact)` in `ContactEditorComponent` that first aborts the changes done to the clone and navigates to `ContactDetailComponent` of the given contact using `Router#navigate()` (takes a router dsl configuration)
10. Impement a method `save(contact: Contact)` in `ContactEditorComponent` that first commits the changes done to the clone and navigates back to `ContactDetailComponent` of that component

### Additional resources and help

- [ngModel](https://angular.io/docs/ts/latest/api/common/NgModel-directive.html)
- [Router#navigate()](https://angular.io/docs/ts/latest/api/router/Router-class.html#!#navigate)
