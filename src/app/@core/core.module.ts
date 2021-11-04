import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from "./layout/layout.module";
import { ServicesModule } from './services/services.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ServicesModule
  ]
})
export class CoreModule { }
