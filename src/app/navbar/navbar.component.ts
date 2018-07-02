import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {auth} from 'google-auth-library';

@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(public autService: AuthService) {
  }

  logout(){
    this.autService.logOut();
  }

}
