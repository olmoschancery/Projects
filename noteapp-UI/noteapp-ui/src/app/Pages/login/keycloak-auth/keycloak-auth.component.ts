import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-keycloak-auth',
  templateUrl: './keycloak-auth.component.html',
  styleUrls: ['./keycloak-auth.component.scss'],
})
export class KeycloakAuthComponent implements OnInit {
  isLoggedIn = false;
  userProfile: KeycloakProfile | null = null;

  constructor(private keycloak: KeycloakService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (!this.isLoggedIn) {
      this.keycloak.login();
    }
  }
}
