import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAutModule} from 'angularfire2/auth';

import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {GithubProfileComponent} from './github-profile/github-profile.component';
import {HttpModule} from '@angular/http';
import {PostsComponent} from './posts/posts.component';
import {RouterModule, Routes} from '@angular/router';
import {PostService} from './services/post.service';
import {NavbarComponent} from './navbar/navbar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { GithubFollowerComponent } from './github-follower/github-follower.component';

const appRoutes: Routes = [
  {path: 'flower', component: GithubFollowerComponent},
  {path: 'flower/:username', component: PageNotFoundComponent},
  {path: 'posts', component: PostsComponent},
  {
    path: '',
    redirectTo: '/flower',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    GithubProfileComponent,
    GithubFollowerComponent,
    PostsComponent,
    NavbarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule,

    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
/*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },*/
