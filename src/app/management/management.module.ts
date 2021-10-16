import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DoorComponent } from './door/door.component';


@NgModule({
  declarations: [
    ManagementComponent,
    SideMenuComponent,
    DoorComponent,
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
