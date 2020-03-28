import { AbstractControl, ValidationErrors } from '@angular/forms'

export class PasswordValidators {

  static passwordCorrect(control: AbstractControl) : Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value !== "1234")
          resolve({ passwordCorrect: false })
        else
          resolve(null)
      }, 2000)
    })
  }

  static passwordShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword')
    let confirmPassword = control.get('confirmPassword')

    if (newPassword.value !== confirmPassword.value)
      return { passwordShouldMatch: true }

    return null

  }
}
