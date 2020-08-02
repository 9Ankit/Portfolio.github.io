import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthencticationRoutingModule } from './authenctication-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent, ResetPasswordComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthencticationRoutingModule
  ]
})
export class AuthencticationModule { }
