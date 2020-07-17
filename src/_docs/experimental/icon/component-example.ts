import { Component } from '@angular/core';
import {
  faHome,
  faUser,
  faSearch,
  faCog,
  faVideo,
  faComment,
  faNewspaper,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'doc-sam-icon',
  templateUrl: './component-example.html',
})
export class SamIconComponentExampleComponent {
  faHome = faHome;
  faUser = faUser;
  faSearch = faSearch;
  faCog = faCog;
  faVideo = faVideo;
  faComment = faComment;
  faNewspaper = faNewspaper;
  faBook = faBook;
}
