import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from "./example/example.component";
import { CodeExampleComponent } from "./example/code.component";
import { SiteHeaderComponent } from "./header/header.component";
import { SiteFooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
      ExampleComponent,
      CodeExampleComponent,
      SiteHeaderComponent,
      SiteFooterComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    ExampleComponent,
    CodeExampleComponent,
    SiteHeaderComponent,
    SiteFooterComponent
  ],
})
export class SiteComponentsModule { }

