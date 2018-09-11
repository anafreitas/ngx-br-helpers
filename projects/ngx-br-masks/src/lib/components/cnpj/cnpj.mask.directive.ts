import { Directive, ElementRef } from "@angular/core";
import { cnpjPattern } from "../../commons/constants";

const vanillaMasker = require("vanilla-masker");

@Directive({
  selector: "[brCnpjMask]"
})
export class CnpjMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(cnpjPattern);
  }
}
