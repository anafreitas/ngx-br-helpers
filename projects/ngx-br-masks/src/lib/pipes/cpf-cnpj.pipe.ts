import { Pipe, PipeTransform } from "@angular/core";
import { cnpjPattern, cpfPattern } from "../commons/constants";

declare var require: any;
const vanillaMasker = require("vanilla-masker");
const CPF_LENGTH = 11;

@Pipe({
  name: "cpfCnpj"
})
export class CpfCnpjPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return "";
    }

    if (value.length > CPF_LENGTH) {
      return vanillaMasker.toPattern(value, cnpjPattern);
    }

    return vanillaMasker.toPattern(value, cpfPattern);
  }
}
