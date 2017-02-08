import { Routes, RouterModule } from '@angular/router';

import { PlaceHolderExampleComponent } from "./placeholder.component";


//manual map, components that don't have documentation set up yet get pointed to the PlaceHolderExampleComponent

export const ROUTES: Routes = [
  { path: '',      component: PlaceHolderExampleComponent, data:{ markdownfile: "src/_static/overview/Getting-Started.md"} }
];
export const routing = RouterModule.forChild(ROUTES);
//add dynamic routes based on structure from sam-ui-elements set in webpack config
for(var idx in STATICPAGES){
  var obj = {};
  obj['path'] = STATICPAGES[idx]['link'];
  obj['component'] = PlaceHolderExampleComponent;
  obj['data'] = {
    markdownfile: STATICPAGES[idx]['file']
  };
	ROUTES.push(obj);
}
// console.log(ROUTES);
