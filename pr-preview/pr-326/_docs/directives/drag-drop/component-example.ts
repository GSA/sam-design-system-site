import {
  Component
} from '@angular/core';

@Component({
  selector: 'doc-sam-drag-drop',
  templateUrl: './component-example.html'
})
export class SamDragDropDirectiveExampleComponent {
  detectionText = '';

  handleDrop(data) {
    this.detectionText = 'Detected an item drop';
  }
}
