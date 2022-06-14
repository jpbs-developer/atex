import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/core/validators/email.validator';

@Component({ templateUrl: './login.component.html' })
export class LoginComponent {
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl([''], [Validators.required, emailValidator]),
    password: new FormControl([''], Validators.required),
  });
  constructor() {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
