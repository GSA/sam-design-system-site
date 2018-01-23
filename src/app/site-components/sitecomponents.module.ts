import { NgModule } from '@angular/core';

import { ExampleComponent } from "./example/example.component";
import { CodeExampleComponent } from "./example/code.component";

@NgModule({
  declarations: [
      ExampleComponent,
      CodeExampleComponent
  ],
  imports: [
  ],
  exports: [
    ExampleComponent,
    CodeExampleComponent
  ],
})
export class SiteComponentsModule { }

