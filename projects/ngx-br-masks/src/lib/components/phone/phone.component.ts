import {
  Component,
  forwardRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ValueAccessorBase } from "../../commons/value-acessor-base";
import { phonePattern, celPattern } from "../../commons/constants";

const TELEFONE_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PhoneComponent),
  multi: true
};

@Component({
  selector: "br-phone",
  templateUrl: "./phone.component.html",
  styleUrls: ["./phone.component.css"],
  providers: [TELEFONE_PROVIDER]
})
export class PhoneComponent extends ValueAccessorBase<string> {
  @Input()
  placeholder: string = phonePattern;
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

  public pattern = (value: any): string => {
    return value.toString().length === 11 ? celPattern : phonePattern;
  };

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
