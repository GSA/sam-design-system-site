import { Component } from '@angular/core';
import {
    faTable,
    faHandsHelping,
    faHelicopter,
    faWheelchair,
    faPaintBrush,
    faChartLine,
    faPaperclip,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'sam-tabs-demo',
    templateUrl: './tabs-demo.template.html',
})
export class TabsDemoComponent {
    faTable = faTable;
    faHandsHelping = faHandsHelping;
    faHelicopter = faHelicopter;
    faWheelchair = faWheelchair;
    faPaintBrush = faPaintBrush;
    faChartLine = faChartLine;
    faPaperclip = faPaperclip;
    faInfoCircle = faInfoCircle;
    tabSelected(e) { }
    currentTabSelected(e) { }
}
