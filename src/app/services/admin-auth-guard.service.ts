import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {UserService} from './user.service';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private userservice: UserService) {
  }

  canActivate():Observable<boolean> {
    return this.auth.user$.pipe(
      switchMap(user =>  this.userservice.get(user.uid)))
      .pipe(map(appUser => appUser.isAdmin));
  }
}
