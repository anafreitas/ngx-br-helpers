import { Pipe, PipeTransform } from "@angular/core";
import { phonePattern, celPattern } from "../commons/constants";

const vanillaMasker = require("vanilla-masker");

@Pipe({
  name: "phone"
})
export class PhonePipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return "";
    }
    const telefonePattern: string =
      value.toString().length === 11 ? phonePattern : celPattern;
    return vanillaMasker.toPattern(value, telefonePattern);
  }
}
