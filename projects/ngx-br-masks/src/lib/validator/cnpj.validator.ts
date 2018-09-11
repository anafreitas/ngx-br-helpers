import { AbstractControl, ValidatorFn } from "@angular/forms";

declare var require: any;
const CNPJ = require("cpf_cnpj").CNPJ;

export function cnpjValidationFn(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;

    if (value && !CNPJ.isValid(value)) {
      return {
        cnpj: true
      };
    }

    return null;
  };
}
