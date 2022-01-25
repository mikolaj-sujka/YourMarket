import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// services
import { AuthService } from '../services/auth.service';

// 3rd
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  closeResult = "";

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private modal: NgbModal) { }

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
    this.authService.loginUser({ email: this.signInForm.value.email, password: this.signInForm.value.password})
    console.log(this.signInForm.value)
    this.signInForm.reset();
  }

  open(content) {
    this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

