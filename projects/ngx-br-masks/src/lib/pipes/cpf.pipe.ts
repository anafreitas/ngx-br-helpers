import { Pipe, PipeTransform } from "@angular/core";
import { cpfPattern } from "../commons/constants";

declare var require: any;
const vanillaMasker = require("vanilla-masker");

@Pipe({
  name: "cpf"
})
export class CpfPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return "";
    }

    return vanillaMasker.toPattern(value, cpfPattern);
  }
}
