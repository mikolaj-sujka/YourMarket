import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components 
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignInComponent, data: { title: 'sign-in', depth: 1 }},
  { path: 'register', component: SignUpComponent, data: { title: 'sign-up', depth: 2}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
