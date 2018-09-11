import { Pipe, PipeTransform } from "@angular/core";
import { cnpjPattern } from "../commons/constants";

declare var require: any;
const vanillaMasker = require("vanilla-masker");

@Pipe({
  name: "cnpj"
})
export class CnpjPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return "";
    }

    return vanillaMasker.toPattern(value, cnpjPattern);
  }
}
