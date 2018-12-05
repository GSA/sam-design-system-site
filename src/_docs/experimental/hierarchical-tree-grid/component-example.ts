
import {
  Component
} from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';

@Component({
  selector: 'doc-sam-tree-grid',
  templateUrl: './component-example.html'
})
export class SamHierarchicalTreeGridComponentExampleComponent {
  constructor(public service: HierarchicalDataService) {

  }
}
