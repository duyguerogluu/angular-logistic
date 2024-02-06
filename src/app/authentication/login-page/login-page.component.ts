import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  active:any;
  constructor(private authservice: AuthService, private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['admin@demo.com',[Validators.required, Validators.email]],
      password : ['admindemo', Validators.required]
    });
  }

  // firebase
  email = "admin@demo.com";
  password = "admindemo";
  errorMessage = ''; // validation _error handle
  _error: { name: string, message: string } = { name: '', message: '' }; // for firbase _error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
         this.router.navigate(['/dashboard'])
         console.clear()
        }).catch((_error:any)=> {
          this.router.navigate(['/dashboard'])
         console.clear()
        })
    }
  }

  validateForm(email:string, password:string) {
    if (email.length === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

  //angular
  public loginForm! : FormGroup;
  public error:any = '';

  get form(){
    return this.loginForm.controls;
  }
  
  Submit(){
    if (this.loginForm.controls['username'].value === "admin@demo.com" && this.loginForm.controls['password'].value === "admindemo" )
    {
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/dashboard']);
    }
  }

}
