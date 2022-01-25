import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = this.formBuilder.group({
      email: ['', 
        [Validators.required, Validators.email]
      ],
      phoneNumber: ['',
        [Validators.required, Validators.minLength(9)]
      ],
      nameOfCompany: ['',
        [Validators.required]
      ],
      additionalInfo: ['']
    })
  }

  onSend() {
    this.toastrService.success("Successfully sent contact info!", "Contact info send", {
      positionClass: 'toast-bottom-center'
    })
    this.contactForm.reset();
  }

}
