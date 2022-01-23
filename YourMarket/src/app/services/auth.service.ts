import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInUser } from '../models/sign-in.model';

// models
import { SignUpUser } from '../models/sign-up.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string; // jwt

  constructor(private http: HttpClient) { }

  signUpUser(user: SignUpUser) {
    this.http.post("http://localhost:3005/api/auth/signup", user)
      .subscribe(response => {
        console.log(response);
      });
  }

  loginUser(user: SignInUser) {
    this.http.post<{ token: string} >("http://localhost:3005/api/auth/signin", user)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
      });
  }
}
