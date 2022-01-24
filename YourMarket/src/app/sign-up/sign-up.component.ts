import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

// services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  checkedCheckbox: boolean = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.signUpForm);
  }

  initializeForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nip: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      nameOfCompany: ['', [Validators.required]],
      city: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      repeatPassword: ['', [Validators.required, this.matchValues('password')]],
    });
  }

  onClickCheckbox(event: any) {
    if (event.target.checked) {
      this.checkedCheckbox = !this.checkedCheckbox;
    }
  }

  matchValues(matchTo: string) : ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value 
        ? null : {isMatching: true}
    }
  }

  onSubmit() {
    this.authService.signUpUser({ 
      email: this.signUpForm.value.email,
      nip: this.signUpForm.value.nip,
      nameOfCompany: this.signUpForm.value.nameOfCompany,
      city: this.signUpForm.value.city,
      password: this.signUpForm.value.password,
      postalCode: this.signUpForm.value.postalCode 
    });
    console.log(this.signUpForm.value);


    this.signUpForm.reset();
  }

  allowSignUp() {
    if(this.checkedCheckbox === true && this.signUpForm.valid) {
      return true;
    }
    return false;
  }
}
