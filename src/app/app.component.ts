import { Component } from "@angular/core";
import { Validators } from "ngx-br-masks";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "br-helper-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public form: FormGroup;
  public model: any = {};

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
    this.updateValues();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      cpf: [null, Validators.cpf()],
      cnpj: [null, Validators.cnpj()],
      cpfDisabled: [null],
      cnpjDisabled: [null],
      telefone: [null],
      cep: [null],
      estado: [null]
    });
  }

  private updateValues() {
    this.form.get("cpfDisabled").setValue(12345678900);
    this.form.get("cpfDisabled").disable();
    this.form.get("cnpjDisabled").setValue(12345678900);
    this.form.get("cnpjDisabled").disable();

    setTimeout(() => {
      this.form.get("cpf").setValue("07987698903");
      this.model.cep = "88715000";
      this.model.telefone = 12345678910;
      this.model.cnpj = 83711511000149;
    }, 1000);
  }
}
