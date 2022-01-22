import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components 
import { HomePageComponent } from './home-page/home-page.component';
import { MyBasketViewComponent } from './my-basket-view/my-basket-view.component';
import { MyProfileViewComponent } from './my-profile-view/my-profile-view.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignInComponent, data: { title: 'sign-in', depth: 1 }},
  { path: 'register', component: SignUpComponent, data: { title: 'sign-up', depth: 2}},
  { path: 'home-page', component: HomePageComponent},
  { path: 'search-page', component: SearchPageComponent},
  { path: 'my-basket', component: MyBasketViewComponent},
  { path: 'my-profile', component: MyProfileViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
