import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() {
    this.items = [
      {label: 'User Profile', icon: 'pi pi-fw pi-user'},
      {label: 'Select Tenant', icon: 'pi pi-fw pi-id-card'},
      {separator: true},
      {label: 'Logout', icon: 'pi pi-fw pi-sign-out', url: 'auth/login'}
    ];
  }

  ngOnInit(): void {
  }

}
