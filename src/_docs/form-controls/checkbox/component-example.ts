import { Component } from "@angular/core";

@Component({
  selector: "doc-checkbox",
  templateUrl: "./component-example.html",
})
export class SamCheckboxComponentExampleComponent {
  checkboxModel: any = [];
  checkboxModel2: any = ["ma"];
  checkboxConfig = {
    options: [
      { value: "dc", label: "DC", name: "checkbox-dc" },
      { value: "ma", label: "Maryland", name: "checkbox-maryland" },
      { value: "va", label: "Virginia", name: "checkbox-virginia" },
    ],
    name: "my-sr-name",
    label: "Select a region (normal)",
    hasSelectAll: false,
    errorMessage: null,
    hint: "",
  };
  disabledCheckboxConfig = {
    options: [
      { value: "dc", label: "DC", name: "checkbox-dc" },
      { value: "ma", label: "Maryland", name: "checkbox-maryland" },
      { value: "va", label: "Virginia", name: "checkbox-virginia" },
    ],
    name: "my-sr-name",
    label: "Select a region (disabled)",
    hasSelectAll: false,
    errorMessage: null,
    hint: "",
  };
  onChange() {
    console.log(this.checkboxModel);
    if (this.checkboxModel.length === 0) {
      this.checkboxConfig.errorMessage = "Please select atleast one region";
    }
  }
}
