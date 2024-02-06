import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructionComponent } from 'src/app/components/pages/under-construction/under-construction.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forget-password',
        component: ForgetPasswordComponent
      },
      {
        path: 'lock-screen',
        component: LockScreenComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
     },
     {
      path: 'under-construction',
      component: UnderConstructionComponent
     }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomePagesRoutingModule { }