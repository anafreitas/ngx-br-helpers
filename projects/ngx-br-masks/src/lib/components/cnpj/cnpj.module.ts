import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CnpjComponent } from "./cnpj.component";
import { FormsModule } from "@angular/forms";
import { CnpjMaskDirective } from "./cnpj.mask.directive";
import { CnpjContainerComponent } from "./cnpj.container.component";

export * from "./cnpj.component";
export * from "./cnpj.mask.directive";
export * from "./cnpj.container.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CnpjComponent, CnpjMaskDirective, CnpjContainerComponent],
  exports: [CnpjComponent, CnpjMaskDirective, CnpjContainerComponent]
})
export class CnpjModule {}
