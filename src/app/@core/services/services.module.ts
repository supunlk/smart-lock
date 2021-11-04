import { NgModule } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { ApiService } from '@core/services/api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  providers: [
    ApiService,
    AuthService,
  ],
  imports: [
    HttpClientModule
  ]
})
export class ServicesModule { }
