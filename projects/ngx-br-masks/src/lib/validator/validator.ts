import { ValidatorFn } from "@angular/forms";
import { cpfValidationFn } from "./cpf.validator";
import { cnpjValidationFn } from "./cnpj.validator";

export * from "./cpf.validator";
export * from "./cnpj.validator";

export class NgxBrValidators {
  static cpf: (
    blockEqualNumberSequence?: boolean
  ) => ValidatorFn = cpfValidationFn;

  static cnpj: (
    blockEqualNumberSequence?: boolean
  ) => ValidatorFn = cnpjValidationFn;
}
