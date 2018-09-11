import { Directive, ElementRef, HostListener } from "@angular/core";
import { removeNonDigitValues } from "../../commons/utils";
import { phonePattern, celPattern } from "../../commons/constants";

declare var require: any;
const vanillaMasker = require("vanilla-masker");

@Directive({
  selector: "[brPhoneMask]"
})
export class PhoneMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener("keyup", ["$event"])
  onKeyup(event: KeyboardEvent) {
    const telefonePattern: string =
      removeNonDigitValues(this.nativeElement.value).length === 11
        ? celPattern
        : phonePattern;
    this.nativeElement.value = vanillaMasker.toPattern(
      this.nativeElement.value,
      telefonePattern
    );
  }
}
