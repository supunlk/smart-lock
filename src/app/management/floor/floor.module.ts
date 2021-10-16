import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloorRoutingModule } from './floor-routing.module';
import { FloorComponent } from "./floor.component";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { FloorPlanComponent } from './floor-plan/floor-plan.component';


@NgModule({
  declarations: [
    FloorComponent,
    FloorPlanComponent
  ],
  imports: [
    CommonModule,
    FloorRoutingModule,
    DropdownModule,
    FormsModule
  ]
})
export class FloorModule { }
