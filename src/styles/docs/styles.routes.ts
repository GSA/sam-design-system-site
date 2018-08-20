import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from './typography.component';
import { ColorsComponent } from './colors.component';
import { ButtonsComponent } from './buttons.component';
import { DocsComponent } from './docs.component';
import { ToolsComponent } from './tools.component';

const stylesRoutes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: 'typography',
        component: TypographyComponent
      },
      {
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'tools',
        component: ToolsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(stylesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StylesRoutingModule {}
