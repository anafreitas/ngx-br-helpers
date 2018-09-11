import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CpfCnpjComponent } from "./cpf-cnpj.component";
import { FormsModule } from "@angular/forms";
import { CpfCnpjMaskDirective } from "./cpf-cnpj.mask.directive";
import { CpfCnpjContainerComponent } from "./cpf-cnpj.container.component";

export * from "./cpf-cnpj.component";
export * from "./cpf-cnpj.container.component";
export * from "./cpf-cnpj.mask.directive";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    CpfCnpjComponent,
    CpfCnpjMaskDirective,
    CpfCnpjContainerComponent
  ],
  exports: [CpfCnpjComponent, CpfCnpjMaskDirective, CpfCnpjContainerComponent]
})
export class CpfCnpjModule {}
