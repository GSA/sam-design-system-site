import { Component } from '@angular/core';
import {
  sdsRequest,
  sdsMessages,
  sdsWorkspace,
  sdsLogOut
} from '@gsa-sam/icons';

@Component({
  templateUrl: 'page-components.template.html'
})
export class SamPatternPageComponentsComponent {
  sdsMessages = sdsMessages;
  sdsRequest = sdsRequest;
  sdsWorkspace = sdsWorkspace;
  sdsLogOut = sdsLogOut;
}
