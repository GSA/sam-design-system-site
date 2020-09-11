/* tslint:disable */
import { Component, OnInit } from "@angular/core";
import { SAMSDSSelectedItemModel } from "@gsa-sam/sam-ui-elements/src/ui-kit/form-controls/sam-sds-autocomplete/selected-result/models/sds-selectedItem.model";
import { SelectionMode } from "@gsa-sam/sam-ui-elements/src/ui-kit/form-controls/sam-sds-autocomplete/selected-result/models/sds-selected-item-model-helper";
import { SAMSDSAutocompletelConfiguration } from "@gsa-sam/sam-ui-elements/src/ui-kit/form-controls/sam-sds-autocomplete/autocomplete/models/SDSAutocompletelConfiguration.model";
import { SampleAutocompleteData } from "./service/autocomplete-sample.data";
import { AutocompleteSampleDataService } from "./service/autocomplete-sample.service";
import { AutocompleteGroupDataService } from "./service/autocomplete-grp.service";

@Component({
  selector: "gsa-sam-sds-autocomplete-sample",
  templateUrl: "./component-example.html",
  styles: [
    `
      code {
        color: #e02b70;
      }
    `,
  ],
  providers: [AutocompleteSampleDataService, AutocompleteGroupDataService],
})
export class SamAutocompleteExampleComponent implements OnInit {
  private data = SampleAutocompleteData;
  public settings = new SAMSDSAutocompletelConfiguration();
  public settings2 = new SAMSDSAutocompletelConfiguration();
  public settings3 = new SAMSDSAutocompletelConfiguration();
  public settings4 = new SAMSDSAutocompletelConfiguration();
  public settings5 = new SAMSDSAutocompletelConfiguration();
  public freeTextSettings = new SAMSDSAutocompletelConfiguration();
  public model = new SAMSDSSelectedItemModel();
  public model2 = new SAMSDSSelectedItemModel();
  public model3 = new SAMSDSSelectedItemModel();
  public model4 = new SAMSDSSelectedItemModel();
  public model5 = new SAMSDSSelectedItemModel();

  public freeTextModel = new SAMSDSSelectedItemModel();
  public groupSettings = new SAMSDSAutocompletelConfiguration();
  public groupModel = new SAMSDSSelectedItemModel();

  public selectGroupSettings = new SAMSDSAutocompletelConfiguration();
  public selectGroupModel = new SAMSDSSelectedItemModel();

  public tagSettings = new SAMSDSAutocompletelConfiguration();
  public tagModel = new SAMSDSSelectedItemModel();

  constructor(
    public service: AutocompleteSampleDataService,
    public groupService: AutocompleteGroupDataService
  ) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {}

  setup() {
    this.settings.id = "autocomplete1";
    this.settings.primaryKeyField = "id";
    this.settings.primaryTextField = "name";
    this.settings.secondaryTextField = "subtext";
    this.settings.labelText = "Autocomplete 1";
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = "Enter text";

    this.settings2.primaryKeyField = "id";
    this.settings2.id = "autocomplete2";
    this.settings2.labelText = "Autocomplete 2";
    this.settings2.primaryTextField = "name";
    this.settings2.secondaryTextField = "subtext";
    this.settings2.selectionMode = SelectionMode.SINGLE;
    this.settings2.autocompletePlaceHolderText = "Enter text";

    this.settings3.primaryKeyField = "id";
    this.settings3.id = "autocomplete3";
    this.settings3.labelText = "Autocomplete 3";
    this.settings3.primaryTextField = "name";
    this.settings3.secondaryTextField = "subtext";
    this.settings3.selectionMode = SelectionMode.MULTIPLE;
    this.settings3.autocompletePlaceHolderText = "Enter text";

    this.settings4.primaryKeyField = "id";
    this.settings4.id = "autocomplete4";
    this.settings4.labelText = "Autocomplete 4";
    this.settings4.primaryTextField = "name";
    this.settings4.secondaryTextField = "subtext";
    this.settings4.autocompletePlaceHolderText = "Enter text";
    this.settings4.selectionMode = SelectionMode.MULTIPLE;
    // this.settings4.minimumCharacterCountSearch = 3;

    this.settings5.primaryKeyField = "id";
    this.settings5.id = "autocomplete5";
    this.settings5.labelText = "Autocomplete 5 Disabled";
    this.settings5.primaryTextField = "name";
    this.settings5.secondaryTextField = "subtext";
    this.settings5.selectionMode = SelectionMode.MULTIPLE;
    this.settings5.autocompletePlaceHolderText = "Enter text";

    this.freeTextSettings.primaryKeyField = "id";
    this.freeTextSettings.id = "autocomplete5";
    this.freeTextSettings.labelText = "Autocomplete 5 Disabled";
    this.freeTextSettings.primaryTextField = "name";
    this.freeTextSettings.secondaryTextField = "subtext";
    this.freeTextSettings.selectionMode = SelectionMode.MULTIPLE;
    this.freeTextSettings.autocompletePlaceHolderText = "Free text";
    this.freeTextSettings.isFreeTextEnabled = true;

    this.groupSettings.id = "autocomplete1";
    this.groupSettings.primaryKeyField = "element_id";
    this.groupSettings.primaryTextField = "value";
    this.groupSettings.labelText = "Autocomplete 1";
    this.groupSettings.selectionMode = SelectionMode.MULTIPLE;
    this.groupSettings.autocompletePlaceHolderText = "Enter text";
    this.groupSettings.isGroupingEnabled = true;
    this.groupSettings.groupByChild = "elements";

    this.selectGroupSettings.id = "autocomplete1";
    this.selectGroupSettings.primaryKeyField = "element_id";
    this.selectGroupSettings.primaryTextField = "value";
    this.selectGroupSettings.labelText = "Autocomplete 1";
    this.selectGroupSettings.selectionMode = SelectionMode.MULTIPLE;
    this.selectGroupSettings.autocompletePlaceHolderText = "Enter text";
    this.selectGroupSettings.isGroupingEnabled = true;
    this.selectGroupSettings.groupByChild = "elements";
    this.selectGroupSettings.isSelectableGroup = false;

    this.tagSettings.primaryKeyField = "id";
    this.tagSettings.id = "autocomplete3";
    this.tagSettings.labelText = "Autocomplete 3";
    this.tagSettings.primaryTextField = "name";
    this.tagSettings.secondaryTextField = "subtext";
    this.tagSettings.selectionMode = SelectionMode.MULTIPLE;
    this.tagSettings.autocompletePlaceHolderText = "Enter text";
    this.tagSettings.isTagModeEnabled = true;

    this.model5.items.push(this.data[0]);
    this.model5.items.push(this.data[1]);
    this.model3.items.push(this.data[0]);
  }
}
