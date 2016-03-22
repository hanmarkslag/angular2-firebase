
import {Http} from 'angular2/http';
import {Injectable} from "angular2/core";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  public getUser() {
    return this.http.get('https://hannes.firebaseio.com/data.json')
      .map(res => res.json())
  }

}
