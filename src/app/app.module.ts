import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { SamAlertFooterService } from '../../sam-ui-elements/src/ui-kit/components/alert-footer';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { DocModule } from '../_docs/doc.module.dynamic';
import { SamUIKitModule } from '../../sam-ui-elements/src/ui-kit';
import { SiteComponentsModule } from './site-components/sitecomponents.module';

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
    DocModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SamUIKitModule,
    SiteComponentsModule,
    //RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    SamAlertFooterService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public samAlertFooterService: SamAlertFooterService
  ) {}

}
