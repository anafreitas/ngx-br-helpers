import { Directive, ElementRef } from "@angular/core";
import { cpfPattern } from "../../commons/constants";

declare var require: any;
const vanillaMasker = require("vanilla-masker");

@Directive({
  selector: "[brCpfMask]"
})
export class CpfMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(cpfPattern);
  }
}
