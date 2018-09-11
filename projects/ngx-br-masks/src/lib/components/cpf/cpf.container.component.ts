import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "br-cpf-container",
  template: `
    <ng-content></ng-content>
    <span *ngIf="shouldShowErrors()" style="color: #f05050">
      <span *ngIf="control.hasError('required')">{{requiredMsg}}</span>
      <span *ngIf="!control.hasError('required') && control.hasError('cpf')">{{cpfMsg}}</span>
    </span>
  `
})
export class CpfContainerComponent {
  @Input()
  control: FormControl;
  @Input()
  requiredMsg = "Este campo é obrigatório";
  @Input()
  cpfMsg = "CPF Inválido";

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
