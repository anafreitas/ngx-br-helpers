import { Directive, ElementRef } from "@angular/core";
import { cepPattern } from "../../commons/constants";

declare var require: any;
const vanillaMasker = require("vanilla-masker");

@Directive({
  selector: "[brCepMask]"
})
export class CepMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(cepPattern);
  }
}
