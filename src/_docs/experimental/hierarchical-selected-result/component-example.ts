
import { Component, OnInit } from '@angular/core';
import { HierarchicalDataService } from '../../services/hierarchical.service';
/* tslint:disable */
import { HierarchicalTreeSelectedItemModel, TreeMode } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-tree-selectedItem.model';
import { SelectedResultSettings } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/selected-result/selected-result.component';



@Component({
  selector: 'doc-sam-selected-result-hierarchical',
  templateUrl: './component-example.html'
})
export class SamHierarchicalSelectedResultComponentExampleComponent implements OnInit {

  public model = new HierarchicalTreeSelectedItemModel();
  public settings = new SelectedResultSettings();

  public model2 = new HierarchicalTreeSelectedItemModel();
  public settings2 = new SelectedResultSettings();

  constructor(public service: HierarchicalDataService) {

  }


  ngOnInit() {
    this.settings.keyField = 'id';
    this.settings.valueProperty = 'name';
    this.settings.subValueProperty = 'subtext';
    this.model.treeMode = TreeMode.SINGLE;


    this.settings2.keyField = 'id';
    this.settings2.valueProperty = 'name';
    this.settings2.subValueProperty = 'subtext';
    this.model2.treeMode = TreeMode.MULTIPLE;

    let exampleItem1 = new ExampleItem('1', 'Item 1', 'Sub Item info 1');
    this.model.addItem(exampleItem1, 'id');
    this.model2.addItem(exampleItem1, 'id');
  }

  addItem() {
    console.log('Add item');
    let id = '3';
    let name = '3434';
    let subtext = '3434';
    let exampleItem = new ExampleItem(id, name, subtext);
    this.model.addItem(exampleItem, 'id');
    this.model2.addItem(exampleItem, 'id');
  }


}

class ExampleItem {
  constructor(public id: string, public name: string, public subtext: string) { }

}
