import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { DummyComponent } from './home/dummy.component';
import { AboutComponent } from './about';


//console.log(DOCS);

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent, data: { } }
];

//add dynamic routes based on structure from src/_docs
/*
for(var idx in DOCS){
	ROUTES.push({
		path: DOCS[idx],
		component: HomeComponent,
		data: {
			directory: DOCS[idx], 
		}
	});
}*/