import { Component} from '@angular/core';

@Component({
  templateUrl: 'page.template.html'
})
export class PageAComponent{

  listItems = [
    {
      "icon": "video",
      "link": "#",
      "text": "Orci varius natoque"
    },
    {
      "icon": "video",
      "link": "#",
      "text": "Vivamus ac est eget ipsum"
    }
  ]

  horizontalListItems = [
    {
      "icon": "video",
      "link": "#",
      "text": "Lorem"
    },
    {
      "icon": "video",
      "link": "#",
      "text": "Suspendisse"
    },
    {
      "icon": "video",
      "link": "#",
      "text": "Maecenas"
    },
    {
      "icon": "video",
      "link": "#",
      "text": "Vivamus"
    }
  ]

}