import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';


//console.log(DOCS);

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent }
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