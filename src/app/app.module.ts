import {environment} from '../environments/environment.prod';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

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
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './auth-guard.service';
import {UserService} from './services/user.service';
import {AdminAuthGuardService} from './services/admin-auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},

  {path: 'check-out', component: CheckOutComponent, canActivate:[AuthGuardService]},
  {path: 'order-success', component: OrderSuccessComponent, canActivate:[AuthGuardService]},
  {path: 'my/orders', component: MyOrdersComponent, canActivate:[AuthGuardService]},

  {path: 'admin/products', component: AdminProductsComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate:[AuthGuardService, AdminAuthGuardService]},


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
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [
    PostService,
    AngularFireAuth,
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService
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
