import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.signInForm)
  }

  initializeForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', 
        [Validators.required, Validators.email]
      ],
      password: ['', 
        [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
      ]
    });
  }

  onSubmit() {
    // this.authService.loginUser({ email: this.signInForm.value.email, password: this.signInForm.value.password})
    console.log(this.signInForm.value.email + " " +  this.signInForm.value.password)
    this.signInForm.reset();
  }

}
