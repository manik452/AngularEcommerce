import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../models/ViewModel/hero';
import {HEROES} from '../services/mock-heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() {
  }

  @Input() hero: Hero;

  ngOnInit() {
  }

}
