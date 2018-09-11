import {
  Component,
  forwardRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ValueAccessorBase } from "../../commons/value-acessor-base";
import { cnpjPattern, cpfPattern } from "../../commons/constants";

const CPF_CNPJ_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CpfCnpjComponent),
  multi: true
};

@Component({
  selector: "br-cpf-cnpj",
  templateUrl: "./cpf-cnpj.component.html",
  styleUrls: ["./cpf-cnpj.component.css"],
  providers: [CPF_CNPJ_PROVIDER]
})
export class CpfCnpjComponent extends ValueAccessorBase<string> {
  @Input()
  placeholder: string = cpfPattern;
  @Input()
  id: string;
  @Input()
  disabled: boolean;
  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value
      ? value
          .replace(/[^\d]/g, "")
          .trim()
          .slice(0, 14)
      : value;
  }

  public pattern = (value: any): string => {
    return value.toString().length > 11 ? cnpjPattern : cpfPattern;
  };

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
