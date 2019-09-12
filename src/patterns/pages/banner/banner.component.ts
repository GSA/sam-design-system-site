import { Component } from '@angular/core';
import {
  sdsRequest,
  sdsMessages,
  sdsWorkspace,
  sdsLogOut
} from '@gsa-sam/icons';

@Component({
  templateUrl: 'banner.template.html'
})
export class SamPatternBannerComponent {
  sdsMessages = sdsMessages;
  sdsRequest = sdsRequest;
  sdsWorkspace = sdsWorkspace;
  sdsLogOut = sdsLogOut;
}
