import { NgModule } from "@angular/core";
import { CepModule } from "./cep/cep.module";
import { CpfModule } from "./cpf/cpf.module";
import { CnpjModule } from "./cnpj/cnpj.module";
import { CpfCnpjModule } from "./cpf-cnpj/cpf-cnpj.module";
import { PhoneModule } from "./phone/phone.module";

export * from "./cep/cep.module";
export * from "./cpf/cpf.module";
export * from "./cnpj/cnpj.module";
export * from "./cpf-cnpj/cpf-cnpj.module";
export * from "./phone/phone.module";

@NgModule({
  imports: [CepModule, CpfModule, CnpjModule, CpfCnpjModule, PhoneModule],
  exports: [CepModule, CpfModule, CnpjModule, CpfCnpjModule, PhoneModule]
})
export class ComponentsModule {}
