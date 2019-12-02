/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { SAMSDSSelectedItemModel } from '@gsa-sam/sam-ui-elements/src/ui-kit/form-controls/sam-sds-autocomplete/selected-result/models/sds-selectedItem.model';
import { SelectionMode } from '@gsa-sam/sam-ui-elements/src/ui-kit/form-controls/sam-sds-autocomplete/selected-result/models/sds-selected-item-model-helper';
import { SAMSDSAutocompletelConfiguration } from '@gsa-sam/sam-ui-elements/src/ui-kit/form-controls/sam-sds-autocomplete/autocomplete/models/SDSAutocompletelConfiguration.model';
import { SampleAutocompleteData } from './service/autocomplete-sample.data';
import { AutocompleteSampleDataService } from './service/autocomplete-sample.service';

@Component({
  selector: 'gsa-sam-sds-autocomplete-sample',
  templateUrl: './component-example.html',
  providers: [AutocompleteSampleDataService]
})
export class SamAutocompleteExampleComponent implements OnInit {

  private data = SampleAutocompleteData;
  public settings = new SAMSDSAutocompletelConfiguration();
  public settings2 = new SAMSDSAutocompletelConfiguration();
  public settings3 = new SAMSDSAutocompletelConfiguration();
  public settings4 = new SAMSDSAutocompletelConfiguration();
  public settings5 = new SAMSDSAutocompletelConfiguration();

  public model = new SAMSDSSelectedItemModel();
  public model2 = new SAMSDSSelectedItemModel();
  public model3 = new SAMSDSSelectedItemModel();
  public model4 = new SAMSDSSelectedItemModel();
  public model5 = new SAMSDSSelectedItemModel();


  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  changes(value) {
    console.log(value);
  }

  ngOnInit() {
  }

  setup() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.SINGLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';



    this.settings2.primaryKeyField = 'id';
    this.settings2.id = 'autocomplete2';
    this.settings2.labelText = 'Autocomplete 2';
    this.settings2.primaryTextField = 'name';
    this.settings2.secondaryTextField = 'subtext';
    this.settings2.selectionMode = SelectionMode.SINGLE;
    this.settings2.autocompletePlaceHolderText = 'Enter text';



    this.settings3.primaryKeyField = 'id';
    this.settings3.id = 'autocomplete3';
    this.settings3.labelText = 'Autocomplete 3';
    this.settings3.primaryTextField = 'name';
    this.settings3.secondaryTextField = 'subtext';
    this.settings3.selectionMode = SelectionMode.MULTIPLE;
    this.settings3.autocompletePlaceHolderText = 'Enter text';



    this.settings4.primaryKeyField = 'id';
    this.settings4.id = 'autocomplete4';
    this.settings4.labelText = 'Autocomplete 4';
    this.settings4.primaryTextField = 'name';
    this.settings4.secondaryTextField = 'subtext';
    this.settings4.autocompletePlaceHolderText = 'Enter text';
    this.settings4.selectionMode = SelectionMode.MULTIPLE;
    // this.settings4.minimumCharacterCountSearch = 3;


    this.settings5.primaryKeyField = 'id';
    this.settings5.id = 'autocomplete5';
    this.settings5.labelText = 'Autocomplete 5 Disabled';
    this.settings5.primaryTextField = 'name';
    this.settings5.secondaryTextField = 'subtext';
    this.settings5.selectionMode = SelectionMode.MULTIPLE;
    this.settings5.autocompletePlaceHolderText = 'Enter text';





    this.model5.items.push(this.data[0]);
    this.model5.items.push(this.data[1]);
    this.model3.items.push(this.data[0]);

  }




}
