import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { SiteComponentsModule } from '../../app/site-components/sitecomponents.module';
import { StylesRoutingModule } from './styles.routes';
import { TypographyComponent } from './typography.component';
import { ColorsComponent } from './colors.component';
import { ButtonsComponent } from './buttons.component';
import { DocsComponent } from './docs.component';
import { ToolsComponent } from './tools.component';

@NgModule({
  declarations: [
    DocsComponent,
    TypographyComponent,
    ColorsComponent,
    ButtonsComponent,
    ToolsComponent
  ],
  imports: [
    CommonModule,
    SiteComponentsModule,
    StylesRoutingModule,
    SamUIKitModule
  ],
  exports: [],
})
export class StylesModule { }

