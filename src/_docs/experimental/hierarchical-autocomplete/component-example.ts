
import { Component, OnInit } from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
import { HierarchicalTreeSelectedItemModel,TreeMode } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-tree-selectedItem.model';
import { SamHierarchicalAutocompleteSettings } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/autocomplete/autocomplete.component';



@Component({
  selector: 'doc-sam-autocomplete-hierarchical',
  templateUrl: './component-example.html'
})
export class SamHierarchicalAutocompleteComponentExampleComponent implements OnInit {


  public model = new HierarchicalTreeSelectedItemModel();
  public settings = new SamHierarchicalAutocompleteSettings();


  constructor(public service: HierarchicalDataService) {

  }


  ngOnInit() {
    this.settings.keyField = "id";
    // this.settings.erorMessage
    //this.settings.id
    //this.settings.labelShowFullHint
    //this.settings.labelText
    //this.settings.labelhint
    //this.settings.required
    this.model.treeMode = TreeMode.SINGLE;
  }
}
