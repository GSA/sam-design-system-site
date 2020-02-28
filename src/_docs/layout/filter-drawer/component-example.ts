import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-sam-filter-drawer-item',
  templateUrl: './component-example.html'
})
export class SamFilterDrawerComponentExampleComponent {
  filtersTemplate = [{
    id: 'aaa',
    label: 'item 1 label',
    value: 'item 1 value'
  }, {
    id: 'bbb',
    label: 'item 2 label',
    value: 'item 2 value'
  }, {
    id: 'ccc',
    label: 'item 3 label',
    value: 'item 3 value'
  }];
  filters = this.filtersTemplate;
  message = '';

  itemRemoveHandler(removedItem) {
    const key = Object.keys(removedItem)[0];
    this.filters = this.filters.filter((item) => {
      if (item.label !== key) {
        return true;
      }
    });
    this.message = `"${key}" removed`;
  }

  resetItems() {
    this.message = '';
    this.filters = this.filtersTemplate;
  }

  clearHandler() {
    this.filters = [];
    this.message = 'Clear event detected';
  }
}
