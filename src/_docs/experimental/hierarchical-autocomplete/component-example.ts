
import { Component, OnInit } from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
/* tslint:disable */
import { HierarchicalTreeSelectedItemModel, TreeMode } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-tree-selectedItem.model';
import { SamHierarchicalAutocompleteConfiguration } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/models/SamHierarchicalAutocompleteConfiguration';
import { SelectedResultConfiguration } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/models/SamHierarchicalSelectedResultConfiguration';


@Component({
  selector: 'doc-sam-autocomplete-hierarchical',
  templateUrl: './component-example.html'
})
export class SamHierarchicalAutocompleteComponentExampleComponent implements OnInit {

  public model = new HierarchicalTreeSelectedItemModel();
  public settings = new SamHierarchicalAutocompleteConfiguration();

  public model2 = new HierarchicalTreeSelectedItemModel();
  public settings2 = new SamHierarchicalAutocompleteConfiguration();

  public model3 = new HierarchicalTreeSelectedItemModel();
  public settings3 = new SamHierarchicalAutocompleteConfiguration();

  public model4 = new HierarchicalTreeSelectedItemModel();
  public settings4 = new SamHierarchicalAutocompleteConfiguration();

  public resultSettings = new SelectedResultConfiguration();



  constructor(public service: HierarchicalDataService) {

  }


  ngOnInit() {
    this.settings.keyField = 'id';
    this.settings.id = 'autocomplete1';
    this.settings.labelText = 'Autocomplete 1';
    this.model.treeMode = TreeMode.SINGLE;
    this.settings.valueProperty = 'name';
    this.settings.subValueProperty = 'subtext';
    this.settings.placeHolderText = "Autocomplete 1";

    this.settings2.keyField = 'id';
    this.settings2.id = 'autocomplete2';
    this.settings2.labelText = 'Autocomplete 2';
    this.model2.treeMode = TreeMode.SINGLE;
    this.settings2.valueProperty = 'name';
    this.settings2.subValueProperty = 'subtext';
    this.settings2.placeHolderText = "Autocomplete 2";

    this.settings3.keyField = 'id';
    this.settings3.id = 'autocomplete3';
    this.settings3.labelText = 'Autocomplete 3';
    this.model3.treeMode = TreeMode.MULTIPLE;
    this.settings3.valueProperty = 'name';
    this.settings3.subValueProperty = 'subtext';
    this.settings3.placeHolderText = "Autocomplete 3";

    this.settings4.keyField = 'id';
    this.settings4.id = 'autocomplete4';
    this.settings4.labelText = 'Autocomplete 4';
    this.model4.treeMode = TreeMode.MULTIPLE;
    this.settings4.valueProperty = 'name';
    this.settings4.subValueProperty = 'subtext';
    this.settings4.placeHolderText = "Autocomplete 4";

    this.resultSettings.keyField = 'id';
    this.resultSettings.valueProperty = 'name';
    this.resultSettings.subValueProperty = 'subtext';
  }
}
