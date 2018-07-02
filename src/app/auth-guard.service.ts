import {Injectable} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './services/auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route, state: RouterStateSnapshot) {
    console.log('AUTH_GUARD Working');
    return this.auth.user$.pipe(map(user => {
      console.log('AUTH_GUARD Working'+user);
      if(user) return true;
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }));
  }
}
