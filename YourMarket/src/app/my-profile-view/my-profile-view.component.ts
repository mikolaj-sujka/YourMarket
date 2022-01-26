import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

// services
import { UserService } from '../services/user.service';

// 3rd
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// models
import { SignUpUser } from '../models/sign-up.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-my-profile-view',
  templateUrl: './my-profile-view.component.html',
  styleUrls: ['./my-profile-view.component.scss'],
})
export class MyProfileViewComponent implements OnInit {
  user: SignUpUser;
  editMode: boolean = false;
  closeResult: string;
  userId = localStorage.getItem('userId');

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private modal: NgbModal,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.getUserById(routeParams.id);
    });
  }

  getUserById(id: string) {
    this.userService.getUserById(id).subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }

  open(content) {
    this.modal
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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

  updateUserData(form: NgForm): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.updateUserData(id, form, this.user.email, this.user.password, this.user.nameOfCompany)
      .subscribe(
        (val) => {
        console.log('POST call successful value returned in body');
        },
        (response) => {
          console.log('Post call in error', response);
          this.toastrService.error("Unsuccessfully changed account info!", "Edit error", {
            positionClass: 'toast-bottom-center'
          });
        },
        () => {
          console.log('The POST observable is now completed.')
          this.toastrService.success("Successfully changed account info!", "Edit success", {
            positionClass: 'toast-bottom-center'
          });
          this.getUserById(this.userId);
        }
      );
  }
}
