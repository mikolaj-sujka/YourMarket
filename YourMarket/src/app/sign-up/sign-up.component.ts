import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.signUpForm)
  }

  initializeForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      nip: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      nameOfCompany: ['', [Validators.required]],
      city: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]]
    });
  }

}
