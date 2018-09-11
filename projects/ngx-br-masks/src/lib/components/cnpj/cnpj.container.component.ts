import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "br-cnpj-container",
  template: `
    <ng-content></ng-content>
    <span *ngIf="shouldShowErrors()" style="color: #f05050">
      <span *ngIf="control.hasError('required')">{{requiredMsg}}</span>
      <span *ngIf="!control.hasError('required') && control.hasError('cnpj')">{{cnpjMsg}}</span>
    </span>
  `
})
export class CnpjContainerComponent {
  @Input()
  control: FormControl;
  @Input()
  requiredMsg = "Este campo é obrigatório";
  @Input()
  cnpjMsg = "CNPJ Inválido";

  public shouldShowErrors(): boolean {
    return (
      this.control &&
      !this.control.valid &&
      !this.control.pristine &&
      this.control.touched &&
      !!this.control.errors
    );
  }
}
