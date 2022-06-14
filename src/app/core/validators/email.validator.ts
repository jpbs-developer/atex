import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl) {
  const email = control.value ?? '';
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    return null;
  }
  return regex.test(email) ? null : { invalidEmail: true };
}
