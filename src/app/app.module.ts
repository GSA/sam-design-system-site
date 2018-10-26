import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SamAlertFooterService } from '@gsa-sam/sam-ui-elements';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { SamUIKitModule } from '@gsa-sam/sam-ui-elements';
import { SiteComponentsModule } from './site-components/sitecomponents.module';

import { MarkdownService } from './services/markdown/markdown.service';
import { SamTitleService } from './services/title/title.service';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySAMUIModule } from '@gsa-sam/sam-ui-elements';

// Application wide providers
const APP_PROVIDERS = [
];


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SamUIKitModule,
    SiteComponentsModule,
    RouterModule.forRoot(ROUTES),
    FormlyModule,
    FormlySAMUIModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    SamAlertFooterService,
    MarkdownService,
    SamTitleService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public samAlertFooterService: SamAlertFooterService
  ) {}

}
