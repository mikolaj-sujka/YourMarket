import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  userId = localStorage.getItem('userId');

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onMyBasktet() {
    this.router.navigateByUrl('/my-basket');
  }

  onLogout() {
    this.authService.logout();
  }

}
