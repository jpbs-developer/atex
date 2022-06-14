import { emailValidator } from 'src/app/core/validators/email.validator';
import { FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({ templateUrl: './forgot-password.component.html' })
export class ForgotPasswordComponent {
  email = new FormControl([''], [Validators.required, emailValidator]);

  constructor() {}
}
