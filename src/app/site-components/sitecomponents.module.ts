import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleComponent } from "./example/example.component";
import { CodeExampleComponent } from "./example/code.component";

@NgModule({
  declarations: [
      ExampleComponent,
      CodeExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ExampleComponent,
    CodeExampleComponent
  ],
})
export class SiteComponentsModule { }

