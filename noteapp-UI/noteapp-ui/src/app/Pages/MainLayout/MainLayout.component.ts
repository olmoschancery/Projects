import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
@Component({
  selector: 'app-MainLayout',
  templateUrl: './MainLayout.component.html',
  styleUrls: ['./MainLayout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isLoggedIn = false;
  authButtonText = '';

  constructor(
    private keyCloakService: KeycloakService,
  ) {}

  async ngOnInit() {
    this.isLoggedIn = await this.keyCloakService.isLoggedIn();
    this.authButtonText = this.isLoggedIn ? 'Logout' : 'Login';
  }

  isAuthenticated() {
    if (!this.isLoggedIn) {
      this.keyCloakService.login();
    } else {
      this.keyCloakService.logout();
    }
  }
}
