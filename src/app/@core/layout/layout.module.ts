import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AvatarModule } from "primeng/avatar";
import { MenuModule } from "primeng/menu";



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    MenuModule
  ]
})
export class LayoutModule { }
