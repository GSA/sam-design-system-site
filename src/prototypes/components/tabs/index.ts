
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ObserveContentModule} from '@angular/cdk';

import {PortalModule} from '@angular/material';
import {MdRippleModule} from '@angular/material';

import {MdTabLabel} from '@angular/material';
import {MdTabLabelWrapper} from '@angular/material';
import {MdTabNav, MdTabLink} from '@angular/material';
import {MdInkBar} from '@angular/material';
import {MdTabBody} from '@angular/material';
import {ɵd} from '@angular/material';
import {MdTabHeader} from '@angular/material';
import {ScrollDispatchModule} from '@angular/material';

import {SamTab} from './tab';
import {SamTabGroup} from './tab-group';


@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    MdRippleModule,
    ObserveContentModule,
    ScrollDispatchModule,
  ],
  exports: [
    SamTabGroup,
    SamTab
  ],
  declarations: [
    SamTabGroup,
    SamTab,
    MdTabLabel,
    MdInkBar,
    MdTabLabelWrapper,
    MdTabNav,
    MdTabLink,
    MdTabBody,
    MdTabHeader
  ],
  providers: [ɵd],
})
export class SamTabsModule {}

