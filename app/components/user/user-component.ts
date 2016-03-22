
import {Component} from 'angular2/core';

import {UserService} from '../../common/user-service'
import {User} from '../../models/user';
import {Observable} from "rxjs/Observable";
import {EMPTY_USER} from "../../common/user-data";

@Component({
  selector: 'user',
  templateUrl: './app/components/user/user-component.html'
})
export class UserComponent {

  user: User = EMPTY_USER

  constructor(service: UserService) {

    var o:Observable = service.getUser()

    o.subscribe(
      data => {this.user = data.user},
      err => console.error(err),
      () => console.log('done')
    );
  }

}
