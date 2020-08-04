import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedMaterialModule } from '../../shared/Angular Material/shared-material.module';

@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedMaterialModule,
    FlexLayoutModule,
  ],
})
export class AuthenticationModule {}
