import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeVerifyComponent } from './home-verify/home-verify.component';
import { HomeSubmitComponent } from './home-submit/home-submit.component';
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HomeVerifyComponent, HomeSubmitComponent]
})
export class HomeModule {
}
