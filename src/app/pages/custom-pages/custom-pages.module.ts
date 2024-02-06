import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { CustomePagesRoutingModule } from './custome-pages-routing.module';
import { UnderConstructionComponent } from 'src/app/components/pages/under-construction/under-construction.component';
import { CdTimerModule } from 'angular-cd-timer';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    LockScreenComponent,
    UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    CustomePagesRoutingModule,
    CdTimerModule
  ]
})
export class CustomPagesModule { }
