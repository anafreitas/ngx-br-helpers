import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CepComponent } from "./cep.component";
import { FormsModule } from "@angular/forms";
import { CepMaskDirective } from "./cep.mask.directive";

export * from "./cep.mask.directive";
export * from "./cep.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CepComponent, CepMaskDirective],
  exports: [CepComponent, CepMaskDirective]
})
export class CepModule {}
