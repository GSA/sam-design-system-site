import { Component} from '@angular/core';
import {
  faVideo,
  faComment,
  faBook,
  faSearch,
  faHome
} from '@fortawesome/free-solid-svg-icons';
@Component({
  templateUrl: 'page.template.html'
})
export class PageAComponent {
  faVideo = faVideo;
  faComment = faComment;
  faBook = faBook;
  faHome = faHome;
  faSearch = faSearch;
}
