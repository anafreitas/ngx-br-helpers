import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhoneComponent } from "./phone.component";
import { FormsModule } from "@angular/forms";
import { PhoneMaskDirective } from "./phone.mask.directive";

export * from "./phone.component";
export * from "./phone.mask.directive";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [PhoneComponent, PhoneMaskDirective],
  exports: [PhoneComponent, PhoneMaskDirective]
})
export class PhoneModule {}
