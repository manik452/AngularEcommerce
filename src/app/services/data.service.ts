import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) {
  }

  getAll() {
    return this.http.get(this.url);
  }

  get(id) {
    return this.http.get(this.url + '/' + id);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }

  /*private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }

    return Observable.throw(new AppError(error));
  }*/
}
