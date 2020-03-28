import { PasswordValidators } from './password.validators';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form: FormGroup

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      password: ['',
        Validators.required,
        PasswordValidators.passwordCorrect
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordShouldMatch
    })
  }


  get password() {
    return this.form.get('password')
  }

  get newPassword() {
    return this.form.get('newPassword')
  }

  get confirmPassword() {
    return this.form.get('confirmPassword')
  }

}
