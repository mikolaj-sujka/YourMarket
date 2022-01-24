// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ContactViewComponent } from './home-page/contact-view/contact-view.component';
import { FilterProductsComponent } from './search-page/filter-products/filter-products.component';
import { MyBasketViewComponent } from './my-basket-view/my-basket-view.component';
import { MyProfileViewComponent } from './my-profile-view/my-profile-view.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { TextInputComponent } from './validations/text-input/text-input.component';

// interceptors
import { LoadingInterceptor } from './_interceptors/loading-interceptor';

// 3rd
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavigationComponent,
    HomePageComponent,
    FooterComponent,
    SearchPageComponent,
    ContactViewComponent,
    FilterProductsComponent,
    MyBasketViewComponent,
    MyProfileViewComponent,
    OrderHistoryComponent,
    TextInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
