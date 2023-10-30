import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { KentekenCheck } from 'rdw-kenteken-check';

export const licensePlateValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const licensePlateCheck = new KentekenCheck(control.value);
  licensePlateCheck.formatLicense();
  //   console.log(licensePlateCheck);
  return licensePlateCheck.valid === true ? null : { licensePlateError: true };
};
