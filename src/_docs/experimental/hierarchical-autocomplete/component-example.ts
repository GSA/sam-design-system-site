
import { Component, OnInit } from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
import { HierarchicalTreeSelectedItemModel, TreeMode } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-tree-selectedItem.model';
import { SamHierarchicalAutocompleteSettings } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/autocomplete/autocomplete.component';



@Component({
  selector: 'doc-sam-autocomplete-hierarchical',
  templateUrl: './component-example.html'
})
export class SamHierarchicalAutocompleteComponentExampleComponent implements OnInit {


  public model = new HierarchicalTreeSelectedItemModel();
  public settings = new SamHierarchicalAutocompleteSettings();

  public model2 = new HierarchicalTreeSelectedItemModel();
  public settings2 = new SamHierarchicalAutocompleteSettings();

  constructor(public service: HierarchicalDataService) {

  }


  ngOnInit() {
    this.settings.keyField = "id";
    // this.settings.erorMessage = "Error AutoComplete 1";
    this.settings.id = "autocomplete1";
    // this.settings.labelShowFullHint
    this.settings.labelText = "Autocomplete 1;"
    // this.settings.labelhint = "Some hint";
    // this.settings.required = true;
    this.model.treeMode = TreeMode.SINGLE;

    this.settings2.keyField = "id";
    // this.settings2.erorMessage = "Error AutoComplete 2";
    this.settings2.id = "autocomplete2"
    this.settings2.labelShowFullHint = false;
    this.settings2.labelText = "Autocomplete 2";
    this.settings2.labelhint = "Some hint";
    // this.settings2.required  = true;
    this.model2.treeMode = TreeMode.SINGLE;
  }
}
