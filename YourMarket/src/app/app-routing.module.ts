import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

// components 
import { HomePageComponent } from './home-page/home-page.component';
import { MyBasketViewComponent } from './my-basket-view/my-basket-view.component';
import { MyProfileViewComponent } from './my-profile-view/my-profile-view.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignInComponent, data: { title: 'sign-in', depth: 1 }},
  { path: 'register', component: SignUpComponent, data: { title: 'sign-up', depth: 2}},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'home-page', component: HomePageComponent},
      { path: 'search-page', component: SearchPageComponent},
      { path: 'my-basket', component: MyBasketViewComponent},
      { path: 'my-profile', component: MyProfileViewComponent},
      { path: 'order-history', component: OrderHistoryComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
