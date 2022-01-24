import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { Subject } from 'rxjs';

// models
import { SignInUser } from '../models/sign-in.model';
import { SignUpUser } from '../models/sign-up.model';

// 3rd
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router, private toastrService: ToastrService,
              private spinnerService: NgxSpinnerService) { }

  signUpUser(user: SignUpUser) {
    this.http.post("http://localhost:3005/api/auth/signup", user)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(["/"]);
        this.toastrService.success("Successfully signed up!", "Sign Up success", {
          positionClass: 'toast-bottom-center'
        })
      }, error => {
        console.log(error);
        this.toastrService.error("Email was taken or some of inputs does not match!", "Sign Up error", {
          positionClass: 'toast-bottom-center'
        });
      });
  }

  loginUser(user: SignInUser) {
    this.http.post<{ token: string, message:string} >("http://localhost:3005/api/auth/signin", user)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        console.log(response.message)

        if(token) {
          // const expiresInDuration = response.expiresIn;
          // this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          // const now = new Date();
          // const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          // console.log(expirationDate);
          // this.saveAuthData(token, expirationDate);
          this.toastrService.success("Successfully signed in!", "Sign In success", {
            positionClass: 'toast-bottom-center'
          })
          this.router.navigate(["/home-page"]);
        }
      }, error => {
          console.log(error);
          this.toastrService.error("Username or password does not match!", "Sign In error", {
            positionClass: 'toast-bottom-center'
          });
      });
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    // clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.showSpinner();
    this.toastrService.success("Successfully logged out!", "Logout success", {
      positionClass: 'toast-bottom-center'
    })

    setTimeout(() => {
      this.spinnerService.hide();
      this.router.navigate(["/"]);
    }, 2000);
  }

  // getters
  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  // localStorage
  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  private showSpinner() {
    this.spinnerService.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255,255,255,0.9)',
      color: '#905ECE',
      size: 'large',
    });
  }

}
