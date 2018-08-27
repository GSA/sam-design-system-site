import { Component} from '@angular/core';
import { 
  faHome,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: 'page.template.html'
})
export class PageBComponent {
  faHome = faHome;
  faSearch = faSearch;
}
