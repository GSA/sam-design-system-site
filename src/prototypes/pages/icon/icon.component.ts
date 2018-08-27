import {
    Component
} from '@angular/core';
import {
    faCoffee,
    faCaretDown,
    faInfo,
    faBook,
    faPencilAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sam-icon-demo',
    templateUrl: './icon.template.html',
})
export class IconDemoComponent {
    faCoffee = faCoffee;
    faCaretDown = faCaretDown;
    faInfo = faInfo;
    faBook = faBook;
    faPencilAlt = faPencilAlt;
}
