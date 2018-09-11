import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CpfComponent } from "./cpf.component";
import { FormsModule } from "@angular/forms";
import { CpfMaskDirective } from "./cpf.mask.directive";
import { CpfContainerComponent } from "./cpf.container.component";

export * from "./cpf.component";
export * from "./cpf.container.component";
export * from "./cpf.mask.directive";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CpfComponent, CpfMaskDirective, CpfContainerComponent],
  exports: [CpfComponent, CpfMaskDirective, CpfContainerComponent]
})
export class CpfModule {}
