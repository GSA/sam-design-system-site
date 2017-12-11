import { Routes, RouterModule } from '@angular/router';

import { StaticPageComponent } from "./staticpage.component";

export const ROUTES: Routes = [
  //{ path: '',      component: StaticPageComponent, data:{ markdownfile: "src/_static/overview/Getting-Started.md"} }//setting homepage manually
];
export const routing = RouterModule.forChild(ROUTES);
//add dynamic routes based on structure from src/_static set in webpack config
// for(var idx in STATICPAGES){
//   var obj = {};
//   obj['path'] = STATICPAGES[idx]['link'];
//   obj['component'] = StaticPageComponent;
//   obj['data'] = {
//     markdownfile: STATICPAGES[idx]['file']
//   };
// 	ROUTES.push(obj);
// }
