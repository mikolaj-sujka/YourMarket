import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignUpUser } from '../models/sign-up.model';

// services
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-profile-view',
  templateUrl: './my-profile-view.component.html',
  styleUrls: ['./my-profile-view.component.scss'],
})
export class MyProfileViewComponent implements OnInit {
  user: SignUpUser;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.getUserById(routeParams.id);
    });
  }

  getUserById(id: string) {
    this.userService.getUserById(id).subscribe((user) => {
      this.user = user;
      console.log(user)
    });
  }
}
