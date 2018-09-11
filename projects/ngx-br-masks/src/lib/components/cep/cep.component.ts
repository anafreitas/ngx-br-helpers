import {
  Component,
  forwardRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ValueAccessorBase } from "../../commons/value-acessor-base";
import { cepPattern, cepPlaceholder } from "../../commons/constants";

const CEP_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CepComponent),
  multi: true
};

@Component({
  selector: "br-cep",
  templateUrl: "./cep.component.html",
  styleUrls: ["./cep.component.css"],
  providers: [CEP_PROVIDER]
})
export class CepComponent extends ValueAccessorBase<string> {
  public pattern: string = cepPattern;

  @Input()
  id: string;
  @Input()
  placeholder: string = cepPlaceholder;
  @Input()
  disabled: boolean;
  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  public blurEvt(event): void {
    this.blur.emit(event);
  }

  transform(value: string): string {
    return value
      ? value
          .replace(/[^\d]/g, "")
          .trim()
          .slice(0, 8)
      : value;
  }
}
