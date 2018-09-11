import { NgModule } from "@angular/core";
import { CpfPipe } from "./cpf.pipe";
import { CnpjPipe } from "./cnpj.pipe";
import { CpfCnpjPipe } from "./cpf-cnpj.pipe";
import { CepPipe } from "./cep.pipe";
import { PhonePipe } from "./phone.pipe";

export * from "./cnpj.pipe";
export * from "./cpf-cnpj.pipe";
export * from "./cpf.pipe";
export * from "./phone.pipe";

@NgModule({
  imports: [],
  declarations: [CepPipe, CpfPipe, CnpjPipe, CpfCnpjPipe, PhonePipe],
  exports: [CepPipe, CpfPipe, CnpjPipe, CpfCnpjPipe, PhonePipe],
  providers: [CepPipe, CpfPipe, CnpjPipe, CpfCnpjPipe, PhonePipe]
})
export class PipesModule {}
