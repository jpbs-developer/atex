import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({ templateUrl: './change-password.component.html' })
export class ChangePasswordComponent {
  hide = true;
  success = false;
  error = false;
  changePasswordForm = new FormGroup({
    token: new FormControl([''], Validators.required),
    password: new FormControl([''], Validators.required),
    confirmPassword: new FormControl([''], Validators.required),
  });
  constructor() {}

  get token() {
    return this.changePasswordForm.get('token');
  }

  get password() {
    return this.changePasswordForm.get('password');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  submit() {
    this.success = !this.success;
    // this.error = !this.error;
  }
}
