import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components 
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignInComponent, data: { title: 'sign-in', depth: 1 }},
  { path: 'register', component: SignUpComponent, data: { title: 'sign-up', depth: 2}},
  { path: 'home-page', component: HomePageComponent},
  { path: 'search-page', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
