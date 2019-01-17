
import { Component, OnInit } from '@angular/core';

/* tslint:disable */
import { HierarchicalTreeSelectedItemModel, TreeMode } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/hierarchical-tree-selectedItem.model';
import { SelectedResultConfiguration } from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/hierarchical/models/SamHierarchicalSelectedResultConfiguration';



@Component({
  selector: 'doc-sam-selected-result-hierarchical',
  templateUrl: './component-example.html'
})
export class SamHierarchicalSelectedResultComponentExampleComponent implements OnInit {

  id: string = '1';
  name: string = 'Item 1';
  subtext: string = 'Sub Item info 1';

  public model3 = new HierarchicalTreeSelectedItemModel();
  public settings3 = new SelectedResultConfiguration();

  public model4 = new HierarchicalTreeSelectedItemModel();
  public settings4 = new SelectedResultConfiguration();

  ngOnInit() {
    this.settings3.keyField = 'id';
    this.settings3.valueProperty = 'name';
    this.settings3.subValueProperty = 'subtext';
    this.model3.treeMode = TreeMode.MULTIPLE;

    this.settings4.keyField = 'id';
    this.settings4.valueProperty = 'name';
    this.settings4.subValueProperty = 'subtext';
    this.model4.treeMode = TreeMode.MULTIPLE;

    this.addItem();
  }

  addItem() {
    let exampleItem = new ExampleItem(this.id, this.name, this.subtext);
    this.model3.addItem(exampleItem, 'id');
    this.model4.addItem(exampleItem, 'id');
  }
}

class ExampleItem {
  constructor(public id: string, public name: string, public subtext: string) { }

}
