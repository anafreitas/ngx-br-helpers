import { NgModule, ModuleWithProviders } from "@angular/core";
import { NgxBrMasksComponent } from "./ngx-br-masks.component";
import { ComponentsModule } from "./components/components.module";
import { PipesModule } from "./pipes/pipes.module";

export * from "./pipes/pipes.module";
export * from "./components/components.module";
export * from "./validator/validator";
export * from "./commons/value-acessor-base";

@NgModule({
  imports: [ComponentsModule, PipesModule],
  declarations: [NgxBrMasksComponent],
  exports: [NgxBrMasksComponent, ComponentsModule, PipesModule]
})
export class NgxBrMasksModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBrMasksModule,
      providers: []
    };
  }
}
