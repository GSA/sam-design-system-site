
import { Component } from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';



@Component({
  selector: 'doc-sam-autocomplete-hierarchical',
  templateUrl: './component-example.html'
})
export class SamHierarchicalAutocompleteComponentExampleComponent {

  constructor(public service: HierarchicalDataService) {

  }
}
