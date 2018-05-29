const fs = require('fs');
const resolve = require('path').resolve;
var recursiveReadSync = require('recursive-readdir-sync');

var path = require('path');
const EVENT = process.env.npm_lifecycle_event || '';

exports.hasProcessFlag = hasProcessFlag;
exports.hasNpmFlag = hasNpmFlag;
exports.getUIKitStructure = getUIKitStructure;
exports.getStaticDirStructure = getStaticDirStructure;
exports.writeModuleFile = writeModuleFile;
exports.writeRoutesFile = writeRoutesFile;

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function hasNpmFlag(flag) {
  return EVENT.includes(flag);
}

function getUIKitStructure(target){
	let docFiles = recursiveReadSync(target);	
	
	let filteredFiles = docFiles.filter((val) => {
		let reg = new RegExp(/component-example\.ts$/g);
		return reg.exec(val);
	});

	let mapped = filteredFiles.map((val) => {
		let file = fs.readFileSync(resolve(val));
		let component;
		let itemIndex = 1;
		if (file) {
			const componentRegex = new RegExp(/(?=@Component)(?:[^\}]*selector[^:]*:[^A-Za-z]*)([A-Za-z-]*)(?:[\s\S]*)(?:export\s+class\s)(\w+)*/g);
			let results = componentRegex.exec(file);
			if (results) {
				component = results[2];
			}
		}
		let currentPath = process.cwd() + "\\src\\docs\\";
		val = val.replace(currentPath, "");
		val = val.replace(/\\\\/g,"/");
		val = val.replace(/\\/g,"/");
		var link = val.substring(0, val.lastIndexOf("/")).replace(target+'/','');
		const linkArr = link.split('/');
	  var section = linkArr[0].split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
		}).join(" ");
		let subsection;
		if (linkArr.length > 2) {
			itemIndex = 2;
			subsection =
				linkArr[1]
				.split('-')
				.map((val) => {
					return val.replace(/^\w/g, l => l.toUpperCase());
				})
				.join(' ');
		}
		item = link.split("/")[itemIndex].split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
	  }).join(" ");
	  return {
	    link: link,
	    routerlink: "/docs/"+link,
	    section: section,
			item: item,
			component: component,
			subsection: subsection
	  };
	})

  return mapped;
}

function getStaticDirStructure(target){
  var regex = /\.md$/;
  var files = recursiveReadSync(target);

	files = files.filter(function(val){
	  return val.match(regex);
	});
	files = files.map(function(val){
		val = val.replace(/\\\\/g,"/");
		val = val.replace(/\\/g,"/");
    var filename = val.replace(target,"");
	  var link = filename.substring(1).replace(/\.md$/,"").toLowerCase().replace(/\s/g,"-");
	  var section = link.substring(0,link.indexOf("/")).split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
	  }).join(" ");
	  var item = link.substring(link.lastIndexOf("/")+1).split("-").map(function(val){
	    val = val.replace(/^\w/g, l => l.toUpperCase())
	    return val;
	  }).join(" ");
	  return {
      file: val,
      link: link,
	    routerlink: "/docs/"+link,
	    section: section,
	    item: item
	  };
	});
	
  return files;
}

function generateModuleString(target) {
	let files = getUIKitStructure(target);
	let imports = files.reduce((prev, curr) => {
		return prev.concat(`import { ${curr.component} } from './${curr.link}/component-example';\n`);
	}, '');
	let declarations = files.map((file) => '\n    ' + file.component);
	let otherDeclarations = ['\n    InterfacesComponent', '\n    DocTemplateComponent', '\n    StaticPageComponent', '\n    BaseExampleComponent'];
	otherDeclarations.forEach((declaration) => {
		declarations.push(declaration);
	});
	return `
/* tslint:disable */
/******************************************************/
/* File generated in ../config/helpers.js             */
/******************************************************/
// Angular Dependencies
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BaseExampleComponent } from './baseexample.component';

${imports}

import { DocTemplateComponent } from './doc.template';
import { routing } from './doc.routes.dynamic';
import { StaticPageComponent } from './static.component';
import { SamUIKitModule } from 'sam-ui-elements/src/ui-kit';
import { InterfacesComponent } from './data-structures/interfaces/interfaces.component';
import { SiteComponentsModule } from '../app/site-components/sitecomponents.module';
import {CdkTableModule} from '@angular/cdk';

/**
 * \AppModule\` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [${declarations}\n  ],
  entryComponents: [${declarations}\n  ],
  imports: [
    CommonModule,
    FormsModule,
    SamUIKitModule,
    routing,
		SiteComponentsModule,
		CdkTableModule
  ],
  exports: [BaseExampleComponent]
})
export class DocModule { }\n`
}


function writeModuleFile (target, destination) {
	fs.writeFile(destination, generateModuleString(target), (err) => {
		if (err) {
			console.log(err);
		}
	})
}

function writeRoutesFile (target1, target2, destination) {
	fs.writeFile(destination, generateRoutesString(target1, target2), (err) => {
		if (err) {
			console.log(err);
		}
	})
}

function generateRoutesString (docsTarget, staticTarget) {
	let files = getUIKitStructure(docsTarget);
	let staticFiles = getStaticDirStructure(staticTarget);
	let imports = files.reduce((prev, curr) => {
		return prev.concat(`import { ${curr.component} } from './${curr.link}/component-example';\n`);
	}, '');
	let routes = files.reduce((prev, curr) => {
		return prev.concat(
			`\n  { path: '${curr.link}', component: ${curr.component} },`
		)
	}, '');
	let staticRoutes = staticFiles.reduce((prev, curr) => {

		const rel = path.relative(__dirname, curr.file)
			.split(path.sep)
			.filter(word => word !== '..')
			.join(path.sep)
			
		return prev.concat(
			`\n  {\n    path: '${curr.link}',\n    component: StaticPageComponent,\n    data: { markdownfile: '${rel}' }\n  },`
		)
	}, '');

	return `
/* tslint:disable */
/******************************************************/
/* File generated in ../config/helpers.js             */
/******************************************************/
import { Routes, RouterModule } from '@angular/router';

${imports}

import { StaticPageComponent } from './static.component';

export const ROUTES: Routes = [
${routes}${staticRoutes}
];
export const routing = RouterModule.forChild(ROUTES);
\n`
}


