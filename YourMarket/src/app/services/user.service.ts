import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

// environment 
import { environment } from 'src/environments/environment';

// rxjs
import { Observable } from 'rxjs';

// models
import { SignUpUser } from '../models/sign-up.model';

const apiUrl = environment.apiUrl + '/auth/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findUsers(name: string): Observable<SignUpUser[]> {
    return this.http.get<SignUpUser[]>(apiUrl + 'find/' + name);
  }

  getUserById(id: string): Observable<SignUpUser> {
    return this.http.get<SignUpUser>(apiUrl + id);
  }

  updateUserData(id: string, form: NgForm, email: string, postalCode: string, nameOfCompany: string): Observable<Object> {
    return this.http.post(apiUrl + id, {
      email: email,
      nip: form.value.nip,
      postalCode: postalCode,
      city: form.value.city,
      nameOfCompany: nameOfCompany,
      password: form.value.password
    });
  }
}
