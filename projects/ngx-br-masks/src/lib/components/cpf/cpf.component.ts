import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from "@angular/core";
import { ValueAccessorBase } from "../../commons/value-acessor-base";
import { cpfPattern, cpfPlaceholder } from "../../commons/constants";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

const CPF_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CpfComponent),
  multi: true
};

@Component({
  selector: "br-cpf",
  templateUrl: "./cpf.component.html",
  styleUrls: ["./cpf.component.css"],
  providers: [CPF_PROVIDER]
})
export class CpfComponent extends ValueAccessorBase<string> {
  public pattern: string = cpfPattern;

  @Input()
  placeholder: string = cpfPlaceholder;
  @Input()
  id: string;

  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value
      ? value
          .replace(/[^\d]/g, "")
          .trim()
          .slice(0, 11)
      : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
