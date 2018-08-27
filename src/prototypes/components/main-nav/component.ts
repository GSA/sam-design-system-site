import { Component} from '@angular/core';
import { 
  faBars,
  faUser,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sam-prototype-nav',
  templateUrl: 'template.html'
})
export class MainNavComponent {
  faBars = faBars;
  faUser = faUser;
  faSearch = faSearch
}
