import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DialogService } from "primeng/dynamicdialog";
import { RegisterDeviceComponent } from "./register-device/register-device.component";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  providers: [ConfirmationService, DialogService]
})
export class RoomComponent implements OnInit {

  roomNo!: string | null;

  constructor(private _route: ActivatedRoute,
              private _confirmationService: ConfirmationService,
              private _dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.roomNo = this._route.snapshot.paramMap.get('roomId')
  }

  onRegisterDevice(): void {
    this._dialogService.open(RegisterDeviceComponent, {
      width: '500px',
      header: 'Register a device'
    })
  }

  onDeleteDevice() {
    this._confirmationService.confirm({
      message: 'Are you sure that you want to delete this device?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonStyleClass: 'btn btn-outline-secondary',
      acceptButtonStyleClass: 'btn btn-danger',
      accept: () => {
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      },
      reject: () => {
        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }

}
