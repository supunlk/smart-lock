import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DynamicDialogModule } from "primeng/dynamicdialog";


@NgModule({
  declarations: [
    RoomComponent,
    RegisterDeviceComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ConfirmDialogModule,
    DynamicDialogModule,
  ]
})
export class RoomModule { }
